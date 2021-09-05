import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import colors from '../../../theme/colors';

const Button = ({title, disabled, type, loading, onPress}) => {
  const getBackgroundColor = type => {
    if (disabled || loading) return colors.gray;
    else if (type === 'secondary') return colors.secondary;
    else return colors.primary;
  };

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBackgroundColor(type)}]}>
      <View style={styles.buttonContainer}>
        {loading && (
          <ActivityIndicator color={colors.primary} style={{marginRight: 5}} />
        )}
        {title && (
          <Text
            styles={{color: disabled || loading ? colors.black : colors.white}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
