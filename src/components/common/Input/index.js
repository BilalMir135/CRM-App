import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';
import colors from '../../../theme/colors';

const Input = ({
  value,
  onChangeText,
  label,
  style,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocuesd] = useState(false);

  const iconDirection = iconPosition === 'right' ? 'row-reverse' : 'row';
  const borderColor = focused
    ? colors.primary
    : error
    ? colors.danger
    : colors.gray;

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[styles.wrapper, {flexDirection: iconDirection, borderColor}]}>
        {icon && <View>{icon}</View>}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.textInput, style]}
          onFocus={() => setFocuesd(true)}
          onBlur={() => setFocuesd(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
