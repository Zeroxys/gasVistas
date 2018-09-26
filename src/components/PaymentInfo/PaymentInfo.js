import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
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
    width : width * .9,
    margin : 5
  },

})

export default (props) => {
  return (
    <View style={style.container}>

      <View style={style.wrapper}>
        
        <View style={style.infoContent}>
          <Icon name="ios-card" size={15} color="#4F8EF7"/>
          <Text style={{marginLeft : 10, color:'#556B6E'}}>{props.title || 'Payment'}</Text>
          <Text style={{color:'#c1c1c1'}}> by Visa {props.cardInfo}</Text>
        </View>

      </View>
      
      <TouchableOpacity>
        <Icon name="md-arrow-forward" size={22} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  )
}
