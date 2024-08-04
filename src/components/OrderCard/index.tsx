import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '@components';
import styles from './styles';
import {OrderItem} from 'types/order';
import {currencyFormat} from '@utilities';
import moment from 'moment';
import Modal from 'react-native-modal';

interface OrderCardProps {
  item: OrderItem;
  onDetail: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  item,
  onDetail,
  onDelete,
  onEdit,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.orderIdLabel}>Order Id</Text>
      <Text style={styles.orderId}>{item.id}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Customer</Text>
        <Text style={styles.rowValue}>{item.customer_name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Total Products</Text>
        <Text style={styles.rowValue}>
          {currencyFormat(item.total_products)}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Total Price</Text>
        <Text style={styles.rowValue}>{currencyFormat(item.total_price)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Order Date</Text>
        <Text style={styles.rowValue}>
          {moment(item.created_at).format('DD/MM/YYYY H:mm')}
        </Text>
      </View>
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.editButtonTitle}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailButton} onPress={onDetail}>
          <Text style={styles.detailButtonTitle}>Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => setModalVisible(true)}>
          <Icon
            name="delete-outline"
            type="MaterialCommunityIcons"
            style={styles.deleteButtonIcon}
          />
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        useNativeDriver={true}
        style={styles.modal}>
        <View style={styles.modalSection}>
          <View style={styles.modalBody}>
            <Text style={styles.modalTitle}>Are you sure to delete this?</Text>
            <Text style={styles.modalDescription}>
              You can't recover data because it will be deleted permanently.
            </Text>
            <TouchableOpacity
              style={styles.modalDeleteButton}
              onPress={() => {
                onDelete();
                setModalVisible(false);
              }}>
              <Text style={styles.modalDeleteButtonTitle}>Yes, delete it</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBackButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalBackButtonTitle}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrderCard;
