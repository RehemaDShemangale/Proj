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
      source={require('./assets/ggirl.jpeg')} style={{flex:1}}

>
  <LinearGradient
          colors={['#0d0d0d', 'transparent','#0d0d0d', '#0d0d0d']}
          style={{ paddingVertical:13,justifyContent:'space-between',flex:1 }}
    
  >
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginHorizontal:10,alignItems:'center'}}>

          <AntDesign 
              name="arrowleft" 
              color="white" size={25}
          /> 

          <MaterialCommunityIcons 
              
              name="dots-vertical" 
              color="white" size={25}
          /> 


    </View>

    <ScrollView style={{}}
          contentContainerStyle={{paddingTop:100,paddingBottom:30}}
    >
       <View
              style={{alignItems:'center'}}       
       >
      <Image 
          source={require('./assets/user.png')} style={{height:100,width:100}}
      />

      <Text style={{color:'white',fontSize:20,marginTop:5}}>Jesus Bishop</Text>
      <Text style={{color:'#dcdde1',marginTop:3}}>@jrcurtis</Text>

      <View style={{flexDirection:'row',width:200,marginTop:20,justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#1e90ff',borderRadius:20,height:40,width:40,alignItems:'center',justifyContent:'center'}}>
             <MaterialCommunityIcons 
              
              name="message-text" 
              color="white" size={20}
             /> 
          </View>   

          <View style={{backgroundColor:'#2ed573',borderRadius:20,height:40,width:40,justifyContent:'center',alignItems:'center'}}>
             <Foundation 
              
              name="telephone" 
              color="white" size={20}
             /> 
          </View>  

          <LinearGradient
                  colors={['#ff7979','#ffbe76']}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  style={{width:75,justifyContent:'center',borderRadius:30
                  }}
            >
        <Text style={{color:'white',alignSelf:'center',fontWeight:'bold'}}>FOLLOW </Text>
        </LinearGradient>           

       </View>
       </View>

       <View style={{marginHorizontal:10,top:80}}>
         <Text style={{color:'white',fontSize:20}}>About me</Text>
         <Text style={{color:'#dfe6e9',fontSize:15,borderRadius:25}}>The availability of low-class flightsand last minute internet deals means that cheap holidays are far easier
           to come by than they used to be,but it can still take a bit of shopping around to get the best discounts.
         </Text>


         <Text style={{color:'white',marginTop:10,fontSize:18}}>Photos</Text>

         <ScrollView
                      horizontal={true}

                  >

                  <View
                        style={{
                          flexDirection:'row',
                          paddingHorizontal:4,
                          marginLeft:10,
                          marginTop:5,
                          }} 
                   >

                     <ImageBackground source={require('./assets/livestreamUser.png')}
                            style={{width: 130, height: 220,marginHorizontal:1,overflow:'hidden',borderRadius:15,justifyContent:'center',alignItems:'center'}}>

                         <LinearGradient
                              colors={['#f1f2f6','#ffbe7600','#f1f2f6']}
                              start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }}
                              
                              style={{width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:25,borderColor:'white'
                              ,borderEndWidth:1,borderTopWidth:1,borderLeftWidth:1,borderBottomWidth:1
                              }}
                          >
                        <FontAwesome
                          name="play" 
                          color="white"
                          size={20}
                        />

                    </LinearGradient> 
          

                     </ImageBackground>


                     <ImageBackground source={require('./assets/livestreamUser1.png')}
                            style={{width: 130, height: 220,marginHorizontal:20,overflow:'hidden',borderRadius:15}}>

                     </ImageBackground>


                     <ImageBackground source={require('./assets/discoverUser.png')}
                            style={{width: 130, height: 220,marginHorizontal:1,overflow:'hidden',borderRadius:15}}>

                     </ImageBackground>




               </View> 
                  </ScrollView>


    </View>

    </ScrollView>


<LinearGradient
        style={{
          position:'absolute',
          height:50,
          bottom:0,
          right:0,
          left:0,
          
        }}
        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.5)']}

/>




  </LinearGradient>

</ImageBackground>

    
  );
}
  }
  