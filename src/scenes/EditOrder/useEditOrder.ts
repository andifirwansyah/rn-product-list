import {useCallback, useEffect, useState} from 'react';
import {getProducts, getDetailOrder, updateOrder} from '@services';
import {ProductItem, CreateOrderPayload} from 'types/order';
import Toast from 'react-native-toast-message';

interface FormState {
  product_id: string;
  quantity: string;
  price: string;
  product_name: string;
}

export const useEditOrder = (
  orderId: string,
  initialProducts: ProductItem[],
) => {
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [customerName, setCustomerName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [formStates, setFormStates] = useState<FormState[]>([
    {product_id: '', product_name: '', quantity: '', price: ''},
  ]);

  const fetchProducts = useCallback(async () => {
    const {data, error} = await getProducts();
    if (error) {
      console.log(error);
      return;
    }
    if (data && Array.isArray(data?.data)) {
      setProducts(data.data as ProductItem[]);
    } else {
      console.error('Unexpected data format:', data);
    }
  }, []);

  const fetchOrderDetails = useCallback(async () => {
    setLoading(true);
    const {data, error} = await getDetailOrder(orderId);
    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }
    if (data) {
      setCustomerName(data.customer_name);
      const initialFormStates = data.products.map(product => ({
        product_id: product.product.id.toString(),
        quantity: product.quantity.toString(),
        price: product.product.price.toString(),
        product_name: product.product.name,
      }));
      setFormStates(initialFormStates);
    }
    setLoading(false);
  }, [orderId]);

  useEffect(() => {
    fetchProducts();
    fetchOrderDetails();
  }, [fetchProducts, fetchOrderDetails]);

  const handleAddMoreProduct = () => {
    setFormStates([
      ...formStates,
      {product_id: '', product_name: '', quantity: '', price: ''},
    ]);
  };

  const handleInputChange = (
    index: number,
    field: keyof FormState,
    value: string | null,
  ) => {
    if (value) {
      const updatedFormStates = [...formStates];
      updatedFormStates[index][field] = value;

      if (field === 'product_id') {
        const selectedProduct = products.find(
          product => product.id.toString() === value,
        );
        if (selectedProduct) {
          updatedFormStates[index].price = selectedProduct.price.toString();
        } else {
          updatedFormStates[index].price = '';
        }
      }

      setFormStates(updatedFormStates);
    }
  };

  const onSubmit = useCallback(async () => {
    setLoading(true);
    const payload: CreateOrderPayload = {
      customer_name: customerName,
      products: formStates.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
      })),
    };

    const {data, error} = await updateOrder(orderId, payload);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to update order',
        text2: 'Something went wrong, Please try again!',
        autoHide: true,
      });
      setLoading(false);
      return;
    }
    console.log(data);
    setLoading(false);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Order successfully updated!',
      autoHide: true,
    });
  }, [customerName, formStates, orderId]);

  return {
    products,
    customerName,
    setCustomerName,
    formStates,
    handleAddMoreProduct,
    handleInputChange,
    onSubmit,
    loading,
  };
};
