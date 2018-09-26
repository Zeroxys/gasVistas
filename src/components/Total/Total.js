import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window')

const style =  StyleSheet.create({
  container : {
    width:width,
    height : 100,
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection : 'column',
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
    width : width * .65,
  },

  totalContent : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    height:60,
    alignItems : 'center',
    backgroundColor:'#efefef',
    width: '100%'
  }

})

export default (props) => {
  return (
    <View style={style.container}>

      <View style={style.wrapper}>
        <View style={style.infoContent}>
          <Text style={{color:'#556B6E'}}>{props.title || 'Subtotal'}</Text>
          <Text style={{color:'#c1c1c1', marginRight:10}}>{props.date || '............................................'}</Text>
          <Text style={{color:'#c1c1c1'}}>{props.schedule || '$530.23'}</Text>
        </View>
      </View>

      <View style={style.totalContent}>
        <Text style={{color:'#052C3D'}}>TOTAL</Text>
        <Text style={{color:'#052C3D'}}>{props.schedule || '$530.23'}</Text>
      </View>

    </View>
  )
}
