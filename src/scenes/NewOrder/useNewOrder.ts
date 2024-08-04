import {useCallback, useEffect, useState} from 'react';
import {ProductItem, CreateOrderPayload} from 'types/order';
import {getProducts, createOrder} from '@services';
import Toast from 'react-native-toast-message';

interface FormState {
  product_id: string;
  quantity: string;
  price: string;
  product_name: string;
}

export const useNewOrder = (
  initialProducts: ProductItem[],
  navigation: any,
) => {
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [customerName, setCustomerName] = useState<string>('');
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

    const {data, error} = await createOrder(payload);
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed to create orders',
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
      text2: 'Order successfully created!',
      autoHide: true,
    });
    navigation.goBack();
  }, [customerName, formStates, navigation]);

  return {
    products,
    customerName,
    setCustomerName,
    loading,
    formStates,
    handleAddMoreProduct,
    handleInputChange,
    onSubmit,
  };
};
