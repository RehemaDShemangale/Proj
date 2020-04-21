import React, { Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons';


export default class Trial extends Component{

  render(){
    
  return (


    <View style={{flex:1, backgroundColor: '#192a56', paddingHorizontal: 20, paddingTop:200}}>
      <View style={{ alignItems:'center', flexDirection:"row",justifyContent:'center'}} > 
        <Text style={{color:'red', fontSize:30}}> LogIn</Text>
        <Entypo alignSelf="flex-start" name="login"  color="red" size={25} />
      </View>
      <View style={{padding:10,marginTop:35 ,backgroundColor:'grey',borderRadius:8,width:"100%"}} >
         <TextInput 
         style={{color:'black',fontSize:20,fontStyle:'normal',alignItems:'center'}}
         placeholder="Enter Username"
        
         /> 
      </View>
      <View style={{ padding:10,marginTop:35 ,backgroundColor:'grey',borderRadius:8}} >
         <TextInput 
         style={{color:'black',fontSize:20,fontStyle:'normal'}}
         placeholder="Enter Password"
         secureTextEntry
         /> 
      </View>
      <TouchableOpacity onPress={this._onPressButton}>
      <View style={{ alignItems:'center',width:'90%',marginTop:30, justifyContent:"center",borderRadius:8,alignSelf:'center',backgroundColor: 'red', height:35}}>
        <Text style={{color:"white"}}>   Enter  </Text>
 
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onPressButton}>
      <View style={{ alignItems:'flex-end',marginTop:5, height:35}}>
        <Text style={{color:"pink"}}>signUp  </Text>
 
      </View>
      </TouchableOpacity>     


    </View>


  );
}
  }


