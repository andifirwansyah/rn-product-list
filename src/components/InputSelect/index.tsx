import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {Icon} from '@components';
import Modal from 'react-native-modal';
import {ProductItem} from 'types/order';

interface InputSelectProps {
  data: ProductItem[];
  onChangeValue: (value: string | null) => void;
  label: string;
  required: boolean;
  placeholder?: string;
  selected: string
}

const InputSelect: React.FC<InputSelectProps> = ({
  data,
  onChangeValue,
  label,
  required,
  placeholder,
  selected
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState<string>(selected);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} {required && <Text style={styles.required}>*</Text>}
      </Text>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.inputSection}>
        <Text style={styles.placeholder(isSelected !== '')}>
          {isSelected === '' ? placeholder : isSelected}
        </Text>
        <Icon name="chevron-down" type="Feather" style={styles.inputIcon} />
      </TouchableOpacity>
      <Modal isVisible={showModal} useNativeDriver={true} style={styles.modal}>
        <View style={styles.modalSection}>
          <View style={styles.modalBody}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select product</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Icon
                  name="close"
                  type="AntDesign"
                  style={styles.modalCloseIcon}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => {
                    onChangeValue(item.id.toString());
                    setShowModal(false);
                    setIsSelected(item.name);
                  }}
                  style={styles.product}
                  key={index}>
                  <Text style={styles.productName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(InputSelect);
