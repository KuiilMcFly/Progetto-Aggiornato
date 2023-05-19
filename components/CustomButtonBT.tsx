import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';

type CustomButtonBTProps = {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
};

const CustomButtonBT = ({onPress, label, style}: CustomButtonBTProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: '#014b6e',
          padding: 20,
          borderRadius: 10,
        },
        style,
      ]}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButtonBT;
