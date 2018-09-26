import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window')

const style =  StyleSheet.create({
  container : {
    width:width,
    height : 45,
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    marginBottom : 5,
    padding:5,
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },

  starsContent : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'space-around',
    alignItems: 'center',
    width : width * .2
  }
})

export default (props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity><Text>{props.title}</Text></TouchableOpacity>
      <View style={style.starsContent}>
        <Icon name="ios-star" size={15} color="#4F8EF7" />
        <Icon name="ios-star" size={15} color="#4F8EF7" />
        <Icon name="ios-star" size={15} color="#4F8EF7" />
        <Icon name="ios-star" size={15} color="#4F8EF7" />
        <Icon name="ios-star-half" size={15} color="#4F8EF7" />
      </View>
    </View>
  )
}
