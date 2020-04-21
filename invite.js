import React, { Component} from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { EvilIcons, AntDesign, Feather} from '@expo/vector-icons';


export default class Trial extends Component{

  render(){
    
  return (


    <View style={{flex:1, backgroundColor: '#14141f', paddingHorizontal: 15, paddingTop:19}}>

      
     <View style={{paddingTop:28 ,paddingBottom:15,flexDirection:'row',justifyContent:'space-between'}}>
       <EvilIcons 
       alignSelf="flex-start" 
       name="close" 
       color="white" 
       size={30}
       
       />
      <View style={{justifyContent:'center',alignItems:'flex-end'}}>

      <Text style={{color:'#e55039',fontSize:16}}> Next</Text>

      </View>

     </View>
     <View 
          style={{
            flexDirection:'column',
            borderBottomWidth:0.4,
            paddingBottom:17,
           
            }}
      >
       <Text style={{color:'white', fontWeight:'bold',paddingTop:18,fontSize:30,justifyContent:'flex-start'}}>Invite friends </Text>

     </View>

      <ScrollView>      

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <AntDesign 
        name="checkcircle" 
        color="#e55039" 
        size={28}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <Feather 
        name="plus-circle" 
        color="#e55039" 
        size={31}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <AntDesign 
        name="checkcircle" 
        color="#e55039" 
        size={28}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <Feather 
        name="plus-circle" 
        color="#e55039" 
        size={31}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <AntDesign 
        name="checkcircle" 
        color="#e55039" 
        size={28}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <AntDesign 
        name="checkcircle" 
        color="#e55039" 
        size={28}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
        <Feather 
        name="plus-circle" 
        color="#e55039" 
        size={31}  
       />
        </View>

        </View>
     </View>

     <View style={{ flexDirection:'row',alignItems:'center', justifyContent:"space-between",paddingTop:1.5,borderBottomWidth:1}}>
     
     <Image source={require('./assets/user.png')}
        style={{width: 55, height: 55,marginTop:10}}/>

        <View  style={{ paddingLeft:9,flexDirection:'row',paddingRight:15,paddingBottom:20,paddingVertical:10,width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

        <View style={{flexDirection:'column'}}>
       <Text style={{color:'white',marginTop:20}}> Alhandro</Text>
       <Text style={{color:'grey',marginTop:1}}> You're friends on facebook </Text>
       </View>

       <View style={{ justifyContent:'center',alignItems:'flex-start'}}>
       <AntDesign 
        name="checkcircle" 
        color="#e55039" 
        size={28}  
       />
        </View>

        </View>
     </View>

     </ScrollView>


     </View>




  );
}
  }
