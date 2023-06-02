import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import color from '../constants/color'

const Input = ({value,onChangeText,componentStyle,placeholder,...others}) => {
  return (
    <TextInput {...others} value={value} onChangeText={onChangeText} placeholder={placeholder} style={{...styles.input,...componentStyle}} placeholderTextColor={color.BLACK}/>
  )
}

export default Input