import React from 'react'
import MapView, {Marker} from 'react-native-maps';
import {Modal, StyleSheet} from 'react-native'
import OrderButton from '../orderButton/orderButton'

const styles = StyleSheet.create({
 container: {
    flexDirection: 'column',
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
 

  _mapReady(){
    console.warn(this.props.Ref);
  }

  render() {
   return (
     <Modal onRequestClose={() => console.warn('bye')} style={styles.container}>
       <MapView
         onMapReady = {this._mapReady.bind(this)}
         ref={this.props.Ref}
         marker = {this.props.marker}
         style={styles.map}
         onPress={(e) => this.props.OnPress(e)}
         initialRegion={this.props.currentPosition}>
          <Marker pinColor={'#2A56C6'} coordinate={this.props.currentPosition}/>
       </MapView>
       <OrderButton 
            title={'Send Ubication'} 
            onPress={this.props.OnCloseMap}
            bgColor={{backgroundColor:'#052C3D'}}
            textColor={{color : 'white'}}/>
     </Modal>
   );
 }
}