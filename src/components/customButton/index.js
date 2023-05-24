import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ text, backgroundColor, textColor, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.bottonText, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 205,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 2,
  },
  bottonText: {
    fontFamily: 'IstokWeb-Bold',
    fontSize: 20,
  },
};

export default CustomButton;
