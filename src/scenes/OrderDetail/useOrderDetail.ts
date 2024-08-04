import {useState, useEffect, useCallback} from 'react';
import {getDetailOrder} from '@services';
import {OrderDetailResponse} from 'types/order';

const useOrderDetail = (orderId: string) => {
  const [orderDetail, setOrderDetail] = useState<OrderDetailResponse | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchOrderDetail = useCallback(async () => {
    setLoading(true);
    const {data, error: err} = await getDetailOrder(orderId);
    if (err) {
      setError(err);
    } else {
      setOrderDetail(data || null);
    }
    setLoading(false);
  }, [orderId]);

  useEffect(() => {
    fetchOrderDetail();
  }, [fetchOrderDetail]);

  return {
    orderDetail,
    loading,
    error,
  };
};

export default useOrderDetail;
