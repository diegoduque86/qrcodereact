import React from 'react';
import {Linking, Text, TouchableOpacity, Alert} from 'react-native';
import QRCodescanner from 'react-native-qrcode-scanner';




export default class App extends React.Component{
  render(){
    return(
      <QRCodescanner
      containerStyle={{backgroundColor: "#FFF"}}
      onRead={(e) => {
          Linking.openURL(e.data).catch(err =>
          Alert.alert("QR Code Invalido", e.data));
      }}
      reactivate={true}
      permissionDialogMessage="necessario permissão a camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{borderColor:"#FFF", borderRadius:10}}
      bottomContent={
        <TouchableOpacity>
          <Text style={{fontSize:21, color:`rgb(0, 122, 255)`}}>Use o Scaner</Text>
        </TouchableOpacity>
      }/>
    )
  }
}