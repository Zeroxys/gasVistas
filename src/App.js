import React, {Component} from 'react'
import Geocoder from 'react-native-geocoder';
import {View, Image, StyleSheet, Dimensions, ScrollView, DatePickerAndroid, TimePickerAndroid} from 'react-native'
import RamagasImg from './assets/ramagas.jpg'
import OrderButton from './components/orderButton/orderButton'
import CompanyInfo from './components/CompanyInfo/CompanyInfo'
import UserData from './components/UserData/UserData'
import PaymentInfo from './components/PaymentInfo/PaymentInfo'
import DeliveryDate from './components/DeliveryDate/DeliveryDate';
import OrderInfo from './components/OrderInfo/OrderInfo';
import Total from './components/Total/Total'

import Success from './components/Success/Success'
import MapView from './components/UserData/MapView'

Geocoder.fallbackToGoogle('AIzaSyA7em6oHY9MFjO_Gl_itTQcev2COtmZEmc')

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
      isSuccess : false,
      showMap : false,
      marker : false,

      currentLocation : {
        latitude : 17.989456,
        longitude : -92.947506,
        latitudeDelta : 0.0122,
        longitudeDelta : width / height * 0.0122
      },

      address : '',
      showMapView : false,
      date : '00/00/00',
      schedule : '00:00'
    }

  }

  showMapView = () => {
    this.setState( prevState => {
      return  {
        showMap : !prevState.showMap
      }
    })
  }

  geocoderMethod = (location) => {
    Geocoder.geocodePosition(location).then( res => {
      this.setState( prevState => {
        return {
          address : prevState.address = res[0].formattedAddress
        }
      })
    }).catch(err => {
    })
  }

  sendMyAddress = (coords) => {
    let location = {
      lat: coords.latitude,
      lng: coords.longitude
    }
    this.geocoderMethod(location)
  }

  boughtMethod = () => {
    this.setState( prevState => {
      return  {
        isSuccess : !prevState.isSuccess
      }
    })
  }

  onDataPicker = () => {
    try {
      let today = new Date();
      const {action, hour, minute} = DatePickerAndroid.open({
        date: today,
        minDate: new Date(),
        maxDate: today.setDate(today.getDate()+2),
        mode: 'calendar'
      }).then(res => {
        this.setState(prevState => {
          return {
            date : prevState.date = `${res.day}/${res.month}/${res.year}`
          }
        })
      })
    } catch ({code, message}) {
    }

  }

  onTimePicker = () => {
    try {
      let today = new Date();
      const {action, hour, minute} = TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false, // Will display '2 PM'
        mode : 'clock'
      }).then(res => {
        this.setState(prevState => {
          return {
            schedule : prevState.schedule = `${res.hour}:${res.minute}`
          }
        })
      })
    } catch ({code, message}) {
    }

  }

  onMapView = () => {
    this.setState( prevState => {
      return {
        showMap : !prevState.showMap
      }
    })
  }


  locationHandler = event => {
    let coords = event.nativeEvent.coordinate

    this.sendMyAddress(coords)
    this.setState(prevState => {

      return {
        currentLocation : {
          ...prevState.currentLocation,
          latitude : coords.latitude,
          longitude : coords.longitude
        },
        marker : true
      }
    })

    this.map.animateToRegion({
      ...this.state.currentLocation,
      latitude :  coords.latitude || 0, 
      longitude : coords.longitude || 0
    })

  }
  
  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( pos => {
      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude || 0,
            longitude :  pos.coords.longitude || 0
          }
        }
      }
      this.locationHandler(coordsEvent)
    }, error_handler => {
      if(error_handler) alert('Fallo el obtener tu posicion, asegurate de tener el gps activado')
    })
  }

  componentDidMount() {
    this.getCurrentPosition()
  }


  render(){

    let appearModal = this.state.isSuccess ? <Success onPress={this.boughtMethod}/> : null
    let showMap = this.state.showMap ? <MapView 
                                            OnCloseMap={this.showMapView}
                                            OnPress={this.locationHandler} 
                                            Ref={ref=>this.map=ref} 
                                            marker={this.state.marker} 
                                            currentPosition={this.state.currentLocation}/> : null
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
          
          <UserData
            address={this.state.address}
            onMapView={this.onMapView}
            sendMyAddress={this.sendMyAddress}/>

          <PaymentInfo cardInfo={'* * * 2 3 2 4'}/>
          <DeliveryDate 
            date={this.state.date}
            schedule={this.state.schedule}
            onTimePicker={this.onTimePicker} 
            onDataPicker={this.onDataPicker}/>
          <OrderInfo/>
          <Total/>

          <OrderButton 
            title={'PLACE ORDER'} 
            onPress={this.boughtMethod}
            bgColor={{backgroundColor:'#052C3D'}}
            textColor={{color : 'white'}}/>

          {appearModal}
          {showMap}

        </ScrollView>  
      </View>
    )
  }

}
