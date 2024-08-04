import {useCallback, useState, useEffect} from 'react';
import {orderList, deleteOrder} from '@services';
import {OrderItem} from 'types/order';
import Toast from 'react-native-toast-message';

const useOrder = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchOrders = useCallback(async (page: number, limit: number) => {
    const {data, error} = await orderList(page, limit);
    if (error) {
      console.log(error);
      setLoading(false);
      setIsFetchingMore(false);
      Toast.show({
        type: 'error',
        text1: 'Failed to get the orders',
        text2: 'Something went wrong, Please try again!',
        autoHide: true,
      });
      return;
    }
    if (data) {
      if (page === 1) {
        setOrders(data.list);
      } else {
        setOrders(prevOrders => [...prevOrders, ...data.list]);
      }
      setHasMore(data.list.length > 0);
    }
    setLoading(false);
    setIsFetchingMore(false);
  }, []);

  const onDeleteOrder = useCallback(async (orderId: string) => {
    const {data, error} = await deleteOrder(orderId);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to delete the order',
        text2: 'Something went wrong, Please try again!',
        autoHide: true,
      });
      return;
    }
    console.log(data);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Order successfully deleted!',
      autoHide: true,
    });
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    return {data};
  }, []);

  useEffect(() => {
    fetchOrders(page, 10);
  }, [fetchOrders, page]);

  const loadMoreOrders = () => {
    if (hasMore && !isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  return {
    orders,
    loading,
    isFetchingMore,
    loadMoreOrders,
    hasMore,
    onDeleteOrder,
  };
};

export default useOrder;
