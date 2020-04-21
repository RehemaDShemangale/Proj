import React, { Component} from 'react';
import { Text, Image,View, KeyboardAvoidingView, TextInput, ImageBackground ,ScrollView} from 'react-native';
import {Entypo,AntDesign, MaterialCommunityIcons,FontAwesome5, Ionicons, FontAwesome, Foundation} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Trial extends Component{
  _onPressButton() {
    
  }
  render(){
    
  return (

<View style={{flex:1,backgroundColor:'#ced6e0'}}>

  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:35,alignItems:'center',marginBottom:10,marginHorizontal:10}}>
           <AntDesign 
              name="left" 
               color="black" size={20}
           />   

      <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Rosalie Gray</Text>
           <Entypo 
              name="dots-three-vertical" 
               color="black" size={20}
           />                 


  </View>

  <View style={{backgroundColor:'white',height:'78%',marginTop:15,paddingHorizontal:10}}>

    <Text style={{alignSelf:'flex-end',backgroundColor:'#ff4757',textAlignVertical:'center',height:40,width:200,marginTop:15,textAlign:'center',
               borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,color:'white' }}>Hi Stela! How was your day?</Text>
    <Text style={{alignSelf:'flex-end',fontWeight:'100',fontSize:10}}>Delivered</Text>

    <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image 
            source={require('./assets/user.png')} style={{height:30,width:30,borderRadius:10}}
      
      />
    <Text style={{backgroundColor:'#dfe4ea',textAlignVertical:'center',marginTop:15,width:280,height:50,paddingHorizontal:10,marginLeft:5,
               borderTopRightRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,color:'black' }}>Hi dear! verry nice but I mic u,do u see something interesting today?
           <MaterialCommunityIcons 
              name="emoticon" 
               color="#eccc68" size={20}
           />
               </Text>

               <View style={{backgroundColor:'white',width:25,height:25,borderRadius:25,alignItems:'center',justifyContent:'center',position:"absolute",right:70,top:5}}>

                 <Entypo
                     name="heart"
                     color="#ff4757" size={15}
                 />
                 
                 </View> 
    </View>

    <Image 
            source={require('./assets/green.jpg')} style={{height:200,width:150,borderRadius:10,marginTop:15,marginLeft:34}}
      
      />

<Text style={{alignSelf:'flex-end',backgroundColor:'#ff4757',textAlignVertical:'center',height:40,width:200,marginTop:15,textAlign:'center',
               borderTopLeftRadius:5,borderBottomLeftRadius:5,borderBottomRightRadius:5,color:'white' }}>yes, look! this is awesome
            <MaterialCommunityIcons 
              name="emoticon-excited" 
               color="#70a1ff" size={20}
             />               
               </Text>


  </View>

  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,alignItems:'center',marginHorizontal:15}}>

         <Entypo 
              name="attachment" 
               color="black" size={20}
           />
          <MaterialCommunityIcons 
              name="emoticon-happy-outline" 
               color="black" size={20}
           />

      <TextInput style={{backgroundColor:'#f1f2f6',width:280,borderRadius:10,paddingHorizontal:10}}
        placeholder="Write a comment"
      
      />   
         <MaterialCommunityIcons 
              name="send" 
               color="#ff6b81" size={20}
           />




  </View>


</View>

    
  );
}
  }
  