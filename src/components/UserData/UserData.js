import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window')

const style =  StyleSheet.create({
  container : {
    width:width,
    height : 80,
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
          <Icon name="md-flame" size={15} color="#4F8EF7"/>
          <Text style={{marginLeft : 10, color:'#556B6E'}}>{props.title || 'Cilindro Casa'}</Text>
        </View>

        <View style={style.infoContent}>
          <Icon name="md-pin" size={15} color="#4F8EF7" />
          <Text style={{marginLeft : 10, color: '#c1c1c1'}}>{props.title || 'Avenida Lopez Cotilla No.3231  Int. 2 Col. Providencia, Guadalajara Jalisco'}</Text>
        </View>

      </View>
      
      <TouchableOpacity>
        <Icon name="md-arrow-forward" size={22} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  )
}
