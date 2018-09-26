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
          <Text style={{color:'#556B6E'}}>{props.title || '30 Litros de gas LP'}</Text>
          <Text style={{color:'#c1c1c1', marginRight:10}}>{props.date || '............................'}</Text>
          <Text style={{color:'#c1c1c1'}}>{props.schedule || '$530.23'}</Text>
        </View>
        <Text style={{color:'#c1c1c1', fontSize:10}}>{props.schedule || '30 Litros x 12.93kg'}</Text>
      </View>
      
      <TouchableOpacity>
        <Icon name="md-arrow-forward" size={22} color="#4F8EF7" />
      </TouchableOpacity>
    </View>
  )
}
