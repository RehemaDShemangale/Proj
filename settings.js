import React, { Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons';


export default class Trial extends Component{
  _onPressButton() {
    
  }
  render(){
    
  return (


    <View style={{flex:1, backgroundColor: '#192a56', paddingHorizontal: 15, paddingTop:30}}>
      <View style={{alignSelf:"flex-start"}} >
        <AntDesign alignSelf="flex-start" name="arrowleft" color="white" size={25} /> 
        <Text style={{color:"white", fontSize:30}}>Settings</Text>
      </View>

      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}} >  
         <Text style={{color:"white"}}>   Push Notifications </Text>
         <Entypo name="chevron-thin-right" color="white" />
      </View>

      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
         <Text style={{color:"white"}}>   Language </Text>
         <Entypo name="chevron-thin-right" color="white" />
      </View>

      <View style={{marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
        <Text style={{color:"white"}}>   Linked Accounts </Text>
        <Entypo name="chevron-thin-right" color="white" />
      </View>
      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
        <Text style={{color:"white"}}>   Blocked Accounts </Text>
        <Entypo name="chevron-thin-right" color="white" />
      </View>
      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
        <Text style={{color:"white"}}>   Search History </Text>
        <Entypo name="chevron-thin-right" color="white" />
      </View>
      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
        <Text style={{color:"white"}}>   Report a Problem  </Text>
        <Entypo name="chevron-thin-right" color="white" />
      </View>
      <TouchableOpacity onPress={this._onPressButton}>
      <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",width:"100%"}}>
        <Text style={{color:"yellow"}}>   LogIn  </Text>
        <Entypo name="chevron-thin-right" color="yellow" />
      </View>
      </TouchableOpacity>

      
 
    </View>

  );
}
  }
/*
<View>
        <Text style={{color:"white",fontSize:19}}>Push Notifications          <Entypo name="chevron-thin-right" color="white" /> </Text>
        <Text style={{color:"white",fontSize:19}}>Language                    <Entypo name="chevron-thin-right" color="white" /></Text>
        <Text style={{color:"white",fontSize:19}}>Linked Accounts           <Entypo name="chevron-thin-right" color="white" /></Text>
        <Text style={{color:"white",fontSize:19}}>Blocked Accounts          <Entypo name="chevron-thin-right" color="white" /></Text>
        <Text style={{color:"white",fontSize:19}}>Search History             <Entypo name="chevron-thin-right" color="white" /></Text>
        <Text style={{color:"white",fontSize:19}}>Report a Problem          <Entypo name="chevron-thin-right" color="white" /></Text>
      </View>

  */
