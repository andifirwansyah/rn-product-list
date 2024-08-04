import React from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Container, Header, OrderCard} from '@components';
import {AppStackScreenProps} from 'types/navigation'; // Correct path to your types file
import {Colors} from '@themes';
import useOrder from './useOrder';

type OrderProps = AppStackScreenProps<'Order'>;

const Order: React.FC<OrderProps> = ({navigation}) => {
  const {orders, loading, isFetchingMore, loadMoreOrders, onDeleteOrder} =
    useOrder();
  return (
    <Container>
      <Header
        title="Order"
        onPress={() => navigation.navigate('NewOrder')}
        isBack={false}
      />
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={Colors.PRIMARY}
            style={styles.loadingIndicator}
          />
        )}
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <OrderCard
              item={item}
              key={index}
              onDetail={() =>
                navigation.navigate('OrderDetail', {product: item})
              }
              onEdit={() =>
                navigation.navigate('EditOrder', {orderId: item.id})
              }
              onDelete={() => onDeleteOrder(item.id)}
            />
          )}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          onEndReached={loadMoreOrders}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingMore ? (
              <ActivityIndicator
                size="small"
                color={Colors.PRIMARY}
                style={styles.loadingIndicator}
              />
            ) : null
          }
        />
      </View>
    </Container>
  );
};

export default Order;
