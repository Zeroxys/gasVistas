import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet, Modal, DatePickerAndroid} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window')

const style =  StyleSheet.create({
  container : {
    width:width,
    height : 50,
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    marginBottom : 5,
    padding:5,
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },

  wrapper: {
    width : width * .8,
    display: 'flex',
    alignItems : 'flex-start'
  },

  infoContent : {
    flexDirection: 'row',
    //justifyContent : 'space-around',
    width : width * .65,
    margin : 5
  },

})

export default (props) => {
  return (

    <View style={style.container}>

      <View style={style.wrapper}>
        
        <View style={style.infoContent}>
          <Icon name="ios-calendar" size={15} color="#4F8EF7"/>
          <Text style={{marginLeft : 10, color:'#556B6E', marginRight:25}}>{props.title || 'Fecha de entrega'}</Text>
          <Text style={{color:'#c1c1c1', marginRight:10}}>{props.date || '23/03/18'}</Text>
          <Text style={{color:'#c1c1c1'}}>{props.schedule || '9:50AM'}</Text>

        </View>

      </View>
      
      <TouchableOpacity onPress={props.onDataPicker}>
        <Icon name="md-arrow-forward" size={22} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  )
}
