import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native'
import RamagasImg from './assets/ramagas.jpg'
import OrderButton from './components/orderButton/orderButton'
import CompanyInfo from './components/CompanyInfo/CompanyInfo'
import UserData from './components/UserData/UserData'
import PaymentInfo from './components/PaymentInfo/PaymentInfo'
import DeliveryDate from './components/DeliveryDate/DeliveryDate';
import OrderInfo from './components/OrderInfo/OrderInfo';
import Total from './components/Total/Total'

import Success from './components/Success/Success'

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  imageContainer : {
    backgroundColor : 'red',
    width : width,
    height : height / 4
  }
})

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      isSuccess : false
    }

  }


  boughtMethod = () => {
    this.setState( prevState => {
      return  {
        isSuccess : !prevState.isSuccess
      }
    })
  }

  render(){

    let appearModal = this.state.isSuccess ? <Success onPress={this.boughtMethod}/> : null

    return(
      <View>
        <ScrollView>
          <OrderButton 
            title={'Place order'} 
            onPress={null}
            bgColor={{backgroundColor:'white'}}
            textColor={{color : '#D1D5DA'}}/>
          <Image style={styles.imageContainer} source={RamagasImg}/>
          
          <CompanyInfo title={'RamaGas'}/>
          <UserData/>
          <PaymentInfo cardInfo={'* * * 2 3 2 4'}/>
          <DeliveryDate/>
          <OrderInfo/>
          <Total/>

          <OrderButton 
            title={'PLACE ORDER'} 
            onPress={this.boughtMethod}
            bgColor={{backgroundColor:'#052C3D'}}
            textColor={{color : 'white'}}/>

          {appearModal}

        </ScrollView>  
      </View>
    )
  }

}
