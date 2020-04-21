import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground } from 'react-native';
import { AntDesign, Entypo, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Trial extends Component{

  render(){
    
  return (

    <ImageBackground source={require('./assets/bglivestream.png')} style={{flex:1,width: '100%', height: '100%'}}>

      <LinearGradient
      colors={['#130f40', 'transparent','transparent', '#130f40']}
      style={{ padding: 13, borderRadius: 5,justifyContent:'space-between' }}
      >



          <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:13,paddingHorizontal:15}}>
     
              <Image source={require('./assets/user.png')}
                  style={{width: 55, height: 55}}/>

                  <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

                  <View style={{flexDirection:'column'}}>
                <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
                <Text style={{color:'white',marginTop:1}}> 11:08:45 </Text>
                </View>

                <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
                  <AntDesign 
                  name="closecircle" 
                  color="white" 
                  size={28}  
                />
                  </View>

                  </View>

              </View>

              <View style={{ paddingLeft:5,flexDirection:'row',height:"4%",width:'36%',alignItems:'center',marginHorizontal:10,marginTop:400,borderRadius:20,backgroundColor: '#ff6b6b'}}>

                  <Entypo 
                  name="creative-commons-sharealike" 
                  color="white" 
                  size={18}  
                  />
                    <Text style={{color:'white',paddingLeft:5}}>share with friends</Text>



                  </View>
       <View
             style={{
               paddingHorizontal:4,
               alignItems:'center',
               width:"50%",
               marginTop:10, 
               marginLeft:10,
               backgroundColor:'grey',
               borderRadius:30,
               flexDirection:'row',
              }} 
       >
            
            <Image source={require('./assets/user.png')}
                style={{width: 50, height: 50}}/>

                <View style={{flexDirection:'column'}}>
              <Text style={{color:'white'}}> Alhandro</Text>
              <Text style={{color:'white'}}> Awesome.I love it 
              <AntDesign 
                name="heart" 
                color="pink" 
                size={12}  
              />
              </Text>
              </View>
       </View>
       <View
             style={{
               paddingHorizontal:4,
               alignItems:'center',
               width:"50%",
               marginTop:10, 
               marginLeft:10,
               backgroundColor:'grey',
               borderRadius:30,
               flexDirection:'row',
              }} 
       >
            
            <Image source={require('./assets/user.png')}
                style={{width: 50, height: 50}}/>

                <View style={{flexDirection:'column'}}>
              <Text style={{color:'white'}}> Alhandro</Text>
              <Text style={{color:'white'}}> Wow so pretty  </Text>
              </View>
       </View>

       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:15,marginTop:15}}>

       <View
             style={{
               paddingHorizontal:10,
               marginLeft:10,
               padding:6,
               width:"84%",
               alignItems:'flex-start',
               backgroundColor:'grey',
               borderRadius:30,
              }} 
       >
      
         <TextInput 
         style={{color:'black',fontSize:20,fontStyle:'normal',alignItems:'flex-start'}}
         placeholder="write a comment"      
         /> 

       </View>

                 <FontAwesome 
                  name="telegram" 
                  color="pink" 
                  size={40}  
                  />


       </View>

       </LinearGradient>


    </ImageBackground>


  );
}
  }
