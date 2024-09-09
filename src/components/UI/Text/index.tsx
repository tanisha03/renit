import { StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React, { ReactElement } from 'react'

export const getFont = (weight: string) => {
    switch (weight) {
      case 'bold':
        return `Poppins-Bold`;
      case 'bold-italic':
        return `Poppins-BoldItalic`;
      case 'semi-bold':
        return `Poppins-SemiBold`;
      case 'semi-bold-italic':
        return `Poppins-SemiBoldItalic`;
      case 'italic':
        return `Poppins-Italic`;
      case 'regular':
        return `Poppins-Regular`;
      default:
        return `Poppins-SemiBold`;
    }
  };

const baseStyles = StyleSheet.create({
  text: {
    color: 'black'
  }
}); 

const UIText = ({weight, style, children, ...rest}: {weight?: string, style:StyleProp<any>, children:ReactElement}) => {
  return (
      <Text style={[baseStyles.text, style, {fontFamily: getFont(weight || '')}]} {...rest}>{children}</Text>
  )
}

export default UIText;