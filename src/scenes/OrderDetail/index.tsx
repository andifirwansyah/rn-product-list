import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import styles from './styles';
import {Container, Header} from '@components';
import {AppStackScreenProps} from 'types/navigation';
import {currencyFormat} from 'utilities';
import useOrderDetail from './useOrderDetail';
import {Colors} from '@themes';

type OrderDetailProps = AppStackScreenProps<'OrderDetail'>;

const OrderDetail: React.FC<OrderDetailProps> = ({route, navigation}) => {
  const {product} = route.params;
  const {orderDetail, loading, error} = useOrderDetail(product.id);
  return (
    <Container>
      <Header
        title="Detail Order"
        onPress={() => navigation.goBack()}
        isBack={true}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.orderIdLabel}>Order Id</Text>
          <Text style={styles.orderId}>{product.id}</Text>
          <Text style={styles.orderIdLabel}>Customer Name</Text>
          <Text style={styles.orderId}>{product.customer_name}</Text>
          <Text style={styles.orderIdLabel}>Total Order Price</Text>
          <Text style={styles.orderId}>
            Rp {currencyFormat(product.total_price)}
          </Text>
          <Text style={styles.detailProductLabel}>Product Detail</Text>
          {error && (
            <Text style={styles.errorText}>Error loading order details.</Text>
          )}
          {!orderDetail && !loading && (
            <Text style={styles.errorText}>No details available.</Text>
          )}
          {loading && (
            <ActivityIndicator
              size="small"
              color={Colors.PRIMARY}
              style={styles.loadingIndicator}
            />
          )}
          {orderDetail?.products.map((product, index) => (
            <View style={styles.rowSection} key={index}>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Product Name</Text>
                <Text style={styles.rowValue}>{product.product.name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Price</Text>
                <Text style={styles.rowValue}>
                  {currencyFormat(product.product.price)}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Quantity</Text>
                <Text style={styles.rowValue}>{product.quantity}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.rowLabel}>Total Price</Text>
                <Text style={styles.rowValue}>
                  {currencyFormat(product.product.price * product.quantity)}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default OrderDetail;
