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
      source={require('./assets/green.jpg')} style={{flex:1}}

>
  <LinearGradient
          colors={['rgba(255,242,254,0.1)', '#0d0d0d']}
          style={{ paddingVertical:13,flex:1 }}
    
  >
    <View style={{justifyContent:'space-between',flex:1}}>
   <View style={{backgroundColor:'white',height:80,width:80,borderRadius:15,alignSelf:'center',top:100
   ,alignItems:'center',justifyContent:'center'}}>

     <Entypo
        name="location"
        color="#ff4757"
        size={30}
       />

   </View>
<View style={{top:70}}>
   <Text style={{color:'white',fontWeight:'bold',fontSize:30,textAlign:'center'}}>Share your greatest            moments</Text>

   
   <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:40}}>
     <Entypo
     name="dot-single"
     color="red"
     size={30}
     />

    <Entypo
     name="dot-single"
     color="white"
     size={30}
     />

    <Entypo
     name="dot-single"
     color="white"
     size={30}
     />  
    <Entypo
     name="dot-single"
     color="white"
     size={30}
     />       
   </View>
   </View>

   <View style={{justifyContent:"center",top:-70}}>

   <View style={{backgroundColor:"#5352ed",borderRadius:10,height:45,width:290,alignSelf:'center',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
   <Entypo
        name="facebook"
        color="white"
        size={28}
       />

       <Text style={{color:'white',marginHorizontal:12}}>Connect with facebook</Text>     

   </View>

   <View style={{backgroundColor:"white",height:45,width:290,alignSelf:'center',borderRadius:10,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
   <MaterialCommunityIcons
        name="cellphone"
        color="#ff4757"
        size={30}
       />

       <Text style={{color:'#ff4757'}}>Connect with phone number</Text>        

   </View> 

   <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
   <Text style={{color:'grey'}}>Already have an account?</Text>
   <Text style={{color:'white'}}>Sign In</Text>
   </View>
   </View>


   </View>



  </LinearGradient>

</ImageBackground>

    
  );
}
  }
  