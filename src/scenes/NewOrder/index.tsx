import React from 'react';
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
import {currencyFormat} from 'utilities';
import {Colors} from '@themes';
import {useNewOrder} from './useNewOrder';
type NewOrderProps = AppStackScreenProps<'NewOrder'>;

const NewOrder: React.FC<NewOrderProps> = ({navigation}) => {
  const {
    products,
    customerName,
    setCustomerName,
    loading,
    formStates,
    handleAddMoreProduct,
    handleInputChange,
    onSubmit,
  } = useNewOrder([], navigation);
  return (
    <Container>
      <Header
        title="Add New Order"
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

export default NewOrder;
