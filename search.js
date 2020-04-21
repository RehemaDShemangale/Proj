import React, { Component} from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { EvilIcons} from '@expo/vector-icons';


export default class Trial extends Component{

  render(){
    
  return (


    <View style={{flex:1, backgroundColor: '#14141f', paddingHorizontal: 15, paddingTop:19}}>
      
     <View style={{alignSelf:'flex-start',paddingTop:15}}>
       <EvilIcons 
       alignSelf="flex-start" 
       name="close" 
       color="white" 
       size={30}
       
       />
     </View>
     <View 
          style={{
            borderBottomWidth:0.9,
            paddingBottom:13,
            }}
      >
       <Text style={{color:'white', fontWeight:'bold',paddingTop:18,fontSize:25,justifyContent:'flex-start'}}>Search </Text>
       <View
             style={{
               paddingHorizontal:10,
               padding:6,
               alignItems:'center',
               marginTop:20, 
               backgroundColor:'grey',
               borderRadius:15,
               flexDirection:'row',
              }} 
       >
      
       <EvilIcons 
       name="search" 
       color="white" 
       size={28}  
       />
         <TextInput 
         style={{color:'black',fontSize:20,fontStyle:'normal',alignItems:'flex-start'}}
         placeholder="  search"      
         /> 
       </View>
     </View>
     <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between' }}>
       <Text style={{color:"white",fontWeight:'bold',fontSize:20}}>Recent search</Text>
      <TouchableOpacity onPress={this._onPressButton}>
      <Text style={{color:"pink",fontStyle:'italic',fontSize:18}}> Clear all  </Text>
      </TouchableOpacity>    
     </View>
     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between',borderBottomWidth:1}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> 3 mutual friends </Text>
       </View>
       
       <View style={{ justifyContent:'center',alignItems:'flex-start',marginTop:20,borderRadius:10,backgroundColor: 'red'}}>
        <Text style={{color:"white"}}>   follow  </Text>
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between',borderBottomWidth:1}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> 3 mutual friends </Text>
       </View>
       
       <View style={{ justifyContent:'center',alignItems:'flex-start',marginTop:20,borderRadius:10,backgroundColor: 'red'}}>
        <Text style={{color:"white"}}>   follow  </Text>
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between',borderBottomWidth:1}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> 3 mutual friends </Text>
       </View>
       
       <View style={{ justifyContent:'center',alignItems:'flex-start',marginTop:20,borderRadius:10,backgroundColor: 'red'}}>
        <Text style={{color:"white"}}>   follow  </Text>
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between',borderBottomWidth:1}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> 3 mutual friends </Text>
       </View>
       
       <View style={{ justifyContent:'center',alignItems:'flex-start',marginTop:20,borderRadius:10,backgroundColor: 'red'}}>
        <Text style={{color:"white"}}>   follow  </Text>
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between',borderBottomWidth:1}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> 3 mutual friends </Text>
       </View>
       
       <View style={{ justifyContent:'center',alignItems:'flex-start',marginTop:20,borderRadius:10,backgroundColor: 'red'}}>
        <Text style={{color:"white"}}>   follow  </Text>
        </View>

        </View>
     </View>
     

     </View>




  );
}
  }
/*
 <image source={require('./assets/user.png')}
        style={{width: 50, height: 50}}/>

        Search <view styly=alignItems center><icon><input/> </view>
        */