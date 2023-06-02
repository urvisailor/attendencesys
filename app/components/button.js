import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './styles'
import color from '../constants/color'

const Button = ({text,onClick,componentStyle,isloader}) => {
  return (
    <TouchableOpacity onPress={onClick} style={{...styles.button,...componentStyle}}>
        {isloader?<ActivityIndicator color={color.WHITE} size={'small'}/>:<Text style={styles.buttonText}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default Button