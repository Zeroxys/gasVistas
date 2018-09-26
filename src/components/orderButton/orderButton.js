import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')
const style = StyleSheet.create({
  button : {
    backgroundColor : '#052C3D',
    width : width,
    height : 55,
    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  }
})

export default orderButton = (props) => {
  return (
    <TouchableOpacity style={[style.button, props.bgColor]} onPress={props.onPress}>
        <Text style={props.textColor}>{props.title}</Text>
    </TouchableOpacity>
  )
}
