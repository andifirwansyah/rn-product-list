import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Container, Header, Input, InputSelect} from '@components';
import {AppStackScreenProps} from 'types/navigation';
import styles from './styles';
import {getProducts, getDetailOrder, updateOrder} from '@services';
import {ProductItem, CreateOrderPayload} from 'types/order';
import {currencyFormat} from 'utilities';
import Toast from 'react-native-toast-message';
import {Colors} from '@themes';

type EditOrderProps = AppStackScreenProps<'EditOrder'>;

interface FormState {
  product_id: string;
  quantity: string;
  price: string;
  product_name: string;
}

const EditOrder: React.FC<EditOrderProps> = ({route, navigation}) => {
  const {orderId} = route.params;
  const [products, setProducts] = useState<ProductItem[]>([]);
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
    setFormStates([...formStates, {product_id: '', product_name: '', quantity: '', price: ''}]);
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
    navigation.goBack();
  }, [customerName, formStates, navigation, orderId]);

  return (
    <Container>
      <Header
        title="Edit Order"
        onPress={() => navigation.goBack()}
        isBack={true}
      />
      <ScrollView>
        <View style={styles.container}>
          <Input
            required
            label="Customer Name"
            value={customerName}
            onChangeText={v => setCustomerName(v)}
            placeholder="Input customer name"
          />
          <View style={styles.separator} />
          <Text style={styles.detailProductLabel}>Product Detail</Text>
          {formStates.map((formState, index) => (
            <View key={index}>
              <InputSelect
                label="Product Name"
                required={true}
                data={products}
                selected={formState.product_name}
                placeholder="Select product name"
                onChangeValue={v => handleInputChange(index, 'product_id', v)}
              />
              <Input
                required
                label="Price"
                editable={false}
                value={
                  formState.price === ''
                    ? formState.price
                    : currencyFormat(parseInt(formState.price)).toString()
                }
                placeholder="Price"
              />
              <Input
                required
                label="Quantity"
                onChangeText={value =>
                  handleInputChange(index, 'quantity', value)
                }
                placeholder="Input quantity"
                value={formState.quantity}
              />
              {formStates.length > 1 && <View style={styles.separator} />}
            </View>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddMoreProduct()}>
            <Text style={styles.buttonTitle}>Add More Product</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <Input
            required
            label="Total Order Price"
            editable={false}
            placeholder="Total price"
          />
          <View style={styles.actionSection}>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonTitle}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => onSubmit()}>
              {loading ? (
                <ActivityIndicator size="small" color={Colors.WHITE} />
              ) : (
                <Text style={styles.saveButtonTitle}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default EditOrder;
