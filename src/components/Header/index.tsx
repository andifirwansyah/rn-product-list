import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from '@components';
import styles from './styles';

interface HeaderProps {
  title: string;
  onPress: () => void;
  isBack: boolean;
}

const Header: React.FC<HeaderProps> = ({title, onPress, isBack}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={onPress}>
          {!isBack ? (
            <Icon name="plus" type="Feather" style={styles.icon} />
          ) : (
            <Icon name="arrowleft" type="AntDesign" style={styles.iconArrow} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.centerSide}>
        <TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightSide} />
    </View>
  </View>
);

export default Header;
