import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonstate: "normal"
          }
    }
    getCameraPermissions = async() =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
            hasCameraPermissions: status === "granted",
            buttonstate: "clicked",
            scanned: false
        });
    }
        handleBarCodeScanned = async({type, data})=>{
            this.setState({
              scanned: true,
              scanneddata: data,
              buttonstate: "normal",
            });
          }
    
       
    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonstate = this.state.buttonstate;
            
                if(buttonstate==="clicked" & hasCameraPermissions){
                return(
                    <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
                )
                }
                else if(buttonstate==="normal"){
                return(
                    <View style={styles.container}>
                     <Image
        source={require("../assets/220px-Barcode-scanner.jpg")}
        style={{width:200, height: 200, margin:30,}}/>
                    <Text style={styles.displayText}>{
                      hasCameraPermissions===true ? this.state.scanneddata: "Request Camera Permission"
                    }</Text>     
          
                    <TouchableOpacity
                      onPress={this.getCameraPermissions}
                      style={styles.scanButton}>
                      <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
                  </View>
                )
                }
              
        }
       
      
    }
    const styles=StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        displayText:{
            color:"black",
            fontSize: 15,
            textDecorationLine: 'underline'
            
        },
       scanButton:{
       color:"white",
       backgroundColor: '#2196F3',
       padding: 10,
       margin: 10,
       },  })
