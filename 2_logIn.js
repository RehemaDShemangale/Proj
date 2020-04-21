import React, { Component} from 'react';
import { Text, Image,View, KeyboardAvoidingView, TextInput, ImageBackground ,ScrollView} from 'react-native';
import {Entypo,AntDesign, MaterialCommunityIcons,FontAwesome5, Ionicons, FontAwesome, Foundation} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Trial extends Component{
  _onPressButton() {
    
  }
  render(){
    
  return (

<ImageBackground
      source={require('./assets/hg.png')} style={{flex:1}}

>
  <LinearGradient
          colors={['rgba(255,242,254,0.001)', 'rgba(65,0,0,0.1)']}
          style={{ paddingVertical:13,flex:1 ,justifyContent:'space-between',paddingHorizontal:10}}
  >

    <View style={{marginTop:20}}>
          <AntDesign 
              name="left" 
               color="black" size={20}
         />       
    </View>

    <View>

    <View style={{backgroundColor:'white',height:370,width:350,alignItems:'center',alignSelf:'center',borderRadius:15}}>

      <Text style={{color:'black',fontWeight:'bold',fontSize:30,textAlign:'center',marginTop:20}}>Welcome Back</Text>
      <Text style={{color:'grey',textAlign:'center',marginBottom:20}}>LogIn to your account</Text>

      <TextInput
         style={{color:'black',width:300,height:40,marginTop:20,marginHorizontal:15,paddingHorizontal:10,backgroundColor:'#dfe4ea',borderRadius:5}}
         placeholder="Email"      
      />
      <TextInput
         style={{color:'black',width:300,height:40,marginTop:10,marginBottom:15,marginHorizontal:15,paddingHorizontal:10,backgroundColor:'#dfe4ea',borderRadius:5}}
         placeholder="Password"
         secureTextEntry      
      /> 

      <Text style={{width:300,height:40,marginTop:30,marginBottom:15,textAlign:'center',backgroundColor:'#ff4757',color:'white',borderRadius:5,marginHorizontal:15,textAlignVertical:'center'}}>Sign In</Text>

      <Text style={{textAlign:'center',color:'black',marginTop:20}}>Forgot your password?</Text>     



    </View>

    <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10,marginTop:20}}>
    <Text style={{color:'#ced6e0'}}>Don't have an account?</Text>
    <Text style={{color:'#ff6b81'}}>Sign up</Text>
    </View> 

    </View>   




  </LinearGradient>

</ImageBackground>

    
  );
}
  }
  