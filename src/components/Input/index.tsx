import React from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  KeyboardTypeOptions,
} from 'react-native';
import styles from './styles';
import {Colors} from '@themes';

interface InputProps extends TextInputProps {
  label: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  required?: boolean;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  editable = true,
  keyboardType = 'default',
  required = false,
  value,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} {required && <Text style={styles.required}>*</Text>}
      </Text>
      <View style={styles.inputSection(editable)}>
        <TextInput
          style={styles.input(editable)}
          editable={editable}
          value={value}
          {...rest}
          placeholderTextColor={Colors.GRAY_SCALE}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;
