import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import {View, StyleSheet} from 'react-native'
import OrderButton from '../orderButton/orderButton'

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
    width : '100%',
    minHeight : '100%',
    maxHeight : '100%',
    alignItems :'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class MyApp extends React.Component {
  constructor(props) {
    super(props)
    console.warn(props.currentPosition)
  }
 
  render() {
   return (
     <View style={styles.container}>
       <MapView
         ref={this.props.Ref}
         marker = {this.props.marker}
         style={styles.map}
         onPress={this.props.OnPress}
         initialRegion={this.props.currentPosition}>
          <Marker pinColor={'#2A56C6'} coordinate={this.props.currentPosition}/>
       </MapView>
       <OrderButton 
            title={'Send Ubication'} 
            onPress={null}
            bgColor={{backgroundColor:'#052C3D'}}
            textColor={{color : 'white'}}/>
     </View>
   );
 }
}