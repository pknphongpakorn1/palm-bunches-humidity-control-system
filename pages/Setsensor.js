

import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View,Button,ToastAndroid, Dimensions, ViewPagerAndroid,Slider,Alert,TouchableOpacity,TimePickerAndroid,DatePickerAndroid} from 'react-native';
import { Image} from 'react-native';




export default class DetailsScreen extends Component {
    state = {price: ''}
    updatePrice = (price) => {
       this.setState({ price: price*200 })
       
    }
     state1 = {price1: ''}
    updatePrice1 = (price1) => {
       this.setState1({ price1: price1*200 })
       
    }
      _onPressButton() {
     Alert.alert('Accept')
      }
   render() {
     
     return (
         <View style={{ backgroundColor: '#ccff99', flex: 1 }}>
             <Text style = {{fontSize: 20, color: '#33CCFF' ,margin: 10,}}>ปรับความชื้น </Text>
             <Text style = {{fontSize: 20, color: 'red' ,margin: 5,}}>เซ็นเซอร์ตัวที่1 </Text>
             <Slider onValueChange = {this.updatePrice} />
             <Text style = {{fontSize: 15, color: 'red'}}>{this.state.price}%</Text>
            <Button		 
             onPress={this._onPressButton}
             title="ยืนยัน"
         color='green'
         />
          
             <Text style = {{fontSize: 20, color: 'red' ,margin: 10,}}>เซ็นเซอร์ตัวที่2 </Text>
             <Slider onValueChange = {this.updatePrice} />
             <Text style = {{fontSize: 15, color: 'red'}}>{this.state1.price1}%</Text>
            <Button		 
             onPress={this._onPressButton}
             title="ยืนยัน"
         color='green'
         />   
          
             <Text style = {{fontSize: 20, color: 'red' ,margin: 10,}}>เซ็นเซอร์ตัวที่3 </Text>
             <Slider onValueChange = {this.updatePrice} />
             <Text style = {{fontSize: 15, color: 'red'}}>{this.state.price}%</Text>
            <Button		 
             onPress={this._onPressButton}
             title="ยืนยัน"
         color='green'
         />
         <Text style = {{fontSize: 20, color: 'red' ,margin: 10,}}>เซ็นเซอร์ตัวที่4(ความชื้นรอบกองปาล์ม) </Text>
             <Slider onValueChange = {this.updatePrice} />
             <Text style = {{fontSize: 15, color: 'red'}}>{this.state.price}%</Text>
            <Button		 
             onPress={this._onPressButton}
             title="ยืนยัน"
         color='green'
         />
        </View>
     );
   }
 }