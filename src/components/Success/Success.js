import React from 'react'
import {Modal,Dimensions, View, TouchableOpacity, StyleSheet, Text, Image, CheckBox} from 'react-native'
import OrderButton from '../orderButton/orderButton'
import SuccessImg from '../../assets/success.png'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  image : {
    width : 140,
    height : 140
  },

  mainContent : {
    height : height / 2.7,
    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    marginBottom :10
  },

  timeDelivery : {
    height : height / 6,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'flex-start',
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    marginBottom :10
  },

  checks : {
    height : height / 4.4,
    justifyContent : 'center',
    borderColor : '#D1D5DA',
    borderBottomWidth: 1,
    marginBottom :10
  }
})

export default (props) => {
  return(
    <Modal
      animationType="slide"
      transparent={false}>
      <OrderButton 
            title={'Order Placed'} 
            onPress={null}
            bgColor={{backgroundColor:'white'}}
            textColor={{color : '#052C3D'}}/>

      <View style={styles.mainContent}>
        <Image style={styles.image} source={SuccessImg}/>
        <Text>Has confirmado tu encargo</Text>
        <Text>Ver órden #123123421</Text>
      </View>

      <View style={styles.timeDelivery}>
        <View style={{flexDirection : 'row', alignItems:'baseline'}}>
          <Text style={{fontWeight:'bold', fontSize:50, color:'black'}}>9:50</Text>
          <Text style={{fontWeight:'light', fontSize:20}}>pm</Text></View>
        <Text style={{fontWeight:'100', fontSize:16, color:'c1c1c1'}}>Hora estimada de entrega</Text>
      </View>

      <View style={styles.checks}>
        <View style={{flexDirection:'row'}}>
          <CheckBox value={true} disabled={true}/>
          <Text style={{fontWeight:'100', fontSize:16, color:'c1c1c1'}}>Orden aceptada</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <CheckBox value={true} disabled={true}/>
          <Text style={{fontWeight:'100', fontSize:16, color:'c1c1c1'}}>En camino</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <CheckBox disabled={true}/>
          <Text style={{fontWeight:'100', fontSize:16, color:'c1c1c1'}}>Tu repartidor ya esta afuera de tu domicilio</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <CheckBox disabled={true}/>
          <Text style={{fontWeight:'100', fontSize:16, color:'c1c1c1'}}>Tú orden fue despachada</Text>
        </View>                        
      </View>


      <OrderButton 
            title={'ACEPTAR'} 
            onPress={props.onPress}
            bgColor={{backgroundColor:'#052C3D'}}
            textColor={{color : 'white'}}/>
    </Modal>
  )
}
