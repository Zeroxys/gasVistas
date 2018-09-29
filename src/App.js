import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Dimensions, ScrollView, PermissionsAndroid} from 'react-native'
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

    }

  }


  boughtMethod = () => {
    this.setState( prevState => {
      return  {
        isSuccess : !prevState.isSuccess
      }
    })
  }

  onDataPicker = () => {
    alert('data picker')
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

    //console.warn('first ------>',this.state.currentLocation)

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
      latitude :  coords.latitude,
      longitude : coords.longitude
    })

  }

  /*requestPositionPermission = () => {
    function requestPermission() {
      try {
        const granted = PermissionsAndroid.request(
          android.permission.ACCESS_FINE_LOCATION,
          {
            'title': 'Cool Photo App Camera Permission',
            'message': 'Cool Photo App needs access to your camera ' +
                       'so you can take awesome pictures.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.warn("You can use the camera")
        } else {
          console.warn("Camera permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    requestPermission()
  }*/
  
  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( pos => {
      const coordsEvent = {
        nativeEvent : {
          coordinate : {
            latitude : pos.coords.latitude,
            longitude :  pos.coords.longitude
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
          <UserData onMapView={this.onMapView}/>
          <PaymentInfo cardInfo={'* * * 2 3 2 4'}/>
          <DeliveryDate onDataPicker={this.onDataPicker}/>
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
