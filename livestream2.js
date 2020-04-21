import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground, ScrollView } from 'react-native';
import { AntDesign, Entypo, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Trial extends Component{

  render(){
    
  return (

    <ImageBackground source={require('./assets/livestreamUser.png')} style={{flex:1}}>

      <LinearGradient
      colors={['#2f3640', 'transparent','transparent', '#2f3640']}
      style={{ paddingVertical:13,justifyContent:'space-between',flex:1 }}
      >


          <View style={{ flexDirection:'row',marginTop:15, justifyContent:'center',paddingHorizontal:15}}>
     
              <Image source={require('./assets/user.png')}
                  style={{width: 55, height: 55}}/>

                  <View  style={{ paddingLeft:9,flexDirection:'row',width:"88%",alignItems:'center',justifyContent:'space-between'}}> 

                  <View>
                <Text style={{color:'white'}}> Alhandro</Text>
                <Text style={{color:'white',marginTop:1}}> 11:08:45 </Text>
                </View>

               
                  <AntDesign 
                  name="closecircle" 
                  color="white" 
                  size={28}  
                />

                  </View>

              </View>

              <View style={{}}>
                      <View style={{ paddingLeft:5,flexDirection:'row',alignItems:'center',marginHorizontal:10,marginBottom:10,}}>

                              <Text style={{color:'#f5f6fa',fontWeight:'bold',borderBottomWidth:2,borderBottomColor:'white',paddingBottom:5}}>For you</Text>
                              <Text style={{color:'#dcdde1',marginLeft:40,paddingBottom:5}}>Following</Text>
                              <Text style={{color:'#dcdde1',marginLeft:40,paddingBottom:5}}>Popular</Text>

                      </View>
     


                  <ScrollView
                      horizontal={true}

                  >

                  <View
                        style={{
                          flexDirection:'row',
                          alignSelf:'flex-end',
                          paddingHorizontal:4,
                          alignItems:'center',
                          marginLeft:10,
                          }} 
                   >

                     <ImageBackground source={require('./assets/livestreamUser.png')}
                            style={{width: 130, height: 220,marginHorizontal:1,overflow:'hidden',borderRadius:15}}>
                              <LinearGradient
                                    colors={['#130f4000', 'transparent','transparent', '#2f3640']}
                                    style={{ justifyContent:'flex-end',flex:1 }}
                              >

                          <View
                                      style={{
                                        paddingHorizontal:4,
                                        paddingBottom:4,
                                        alignItems:'center',
                                        flexDirection:'row',
                                        }} 
                                >
                                      
                                      <Image source={require('./assets/user.png')}
                                          style={{width: 30, height:30}}/>

                                        <Text style={{color:'white'}}> Alhandro</Text>
                                </View>


                                </LinearGradient>
                     </ImageBackground>


                     <ImageBackground source={require('./assets/livestreamUser1.png')}
                            style={{width: 130, height: 220,marginHorizontal:20,overflow:'hidden',borderRadius:15}}>
                              <LinearGradient
                                    colors={['#130f4000', 'transparent','transparent', '#2f3640']}
                                    style={{ justifyContent:'flex-end',flex:1 }}
                              >

                                <View
                                      style={{
                                        paddingHorizontal:4,
                                        paddingBottom:4,
                                        alignItems:'center',
                                        flexDirection:'row',
                                        }} 
                                >
                                      
                                      <Image source={require('./assets/user.png')}
                                          style={{width: 30, height:30}}/>

                                        <Text style={{color:'white'}}> Alhandro</Text>
                                </View>


                                </LinearGradient>
                     </ImageBackground>


                     <ImageBackground source={require('./assets/discoverUser.png')}
                            style={{width: 130, height: 220,marginHorizontal:1,overflow:'hidden',borderRadius:15}}>
                              <LinearGradient
                                    colors={['#130f4000', 'transparent','transparent', '#2f3640']}
                                    style={{justifyContent:'flex-end',flex:1 }}
                              >

                                <View
                                      style={{
                                        paddingHorizontal:4,
                                        paddingBottom:4,
                                        alignItems:'center',
                                        flexDirection:'row',
                                        }} 
                                >
                                      
                                      <Image source={require('./assets/user.png')}
                                          style={{width: 30, height:30}}/>

                                        <Text style={{color:'white'}}> Alhandro</Text>
                                </View>


                                </LinearGradient>
                     </ImageBackground>




               </View> 
                  </ScrollView>
                  </View> 
    
       </LinearGradient>


    </ImageBackground>


  );
}
  }

  /*
                          <Image source={require('./assets/livestreamUser.png')}
                            style={{width: 133, height: 225,borderRadius:10,borderColor:'white'}}/>

                        <Image source={require('./assets/livestreamUser.png')}
                            style={{width: 133, height: 225,borderRadius:10,marginHorizontal:15,borderColor:'white'}}/>

                          <Image source={require('./assets/livestreamUser.png')}
                            style={{width: 133, height: 225,borderRadius:10,marginHorizontal:15,borderColor:'white'}}/>
*/