import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle, buttonContainerStyle } = styles;
  const { onPress, children } = props;
  return (
    <View style={buttonContainerStyle}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonContainerStyle: {
    flexDirection: 'row'
  }
};

export { Button };
