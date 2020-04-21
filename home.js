import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground, ScrollView,FlatList} from 'react-native';
import { EvilIcons,Entypo, MaterialIcons, FontAwesome} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

let bgu=require('./assets/livestreamUser.png');
let bgu1=require('./assets/discoverUser.png');
let bgu2=require('./assets/bglivestream.png');
let live=[
  {id:1,name:"Alhandro",bg:bgu},
  {id:2,name:"Rehema",bg:bgu1},
  {id:3,name:"Said",bg:bgu2},
]

export default class Trial extends Component{

  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return(
      <ImageBackground source={item.bg}
          style={{width: 130, height: 220,marginRight:10,overflow:'hidden',borderRadius:15}}>
            <LinearGradient
                  colors={['#130f4000', 'transparent','transparent', '#2f3640']}
                  style={{ flex:1 ,justifyContent:'space-between'}}
            >

        <View  style={{flexDirection:'row',justifyContent:'center',alignSelf:'flex-end',width:"37%",backgroundColor:'#ff5252',borderRadius:15,alignItems:'center',marginTop:8,marginRight:5}}> 

        <FontAwesome 
             name="video-camera" 
             color="white" 
             size={10}  
           /> 
            <Text style={{color:'white',fontSize:12,marginLeft:3}}>LIVE</Text>                

        </View>

        <View
                    style={{
                      padding:5,
                      paddingHorizontal:4,
                      paddingBottom:4,
                      alignItems:'center',
                      flexDirection:'row',
                      }} 
              >

                <View style={{borderColor:'#ff5252',padding:5,borderWidth:2,padding:1.5,borderRadius:30}}>    
                    <Image source={require('./assets/user.png')}
                        style={{width: 35, height:35}}/>
                  </View>
                      <Text style={{color:'white'}}> {item.name}</Text>
              </View>


              </LinearGradient>
    </ImageBackground>
    )
  }

  render(){
    
  return (

    <View  style={{flex:1,backgroundColor:'#2c2c54',paddingVertical:13}}>


          <View style={{ flexDirection:'row',marginTop:20,paddingHorizontal:10}}>

                  <View  style={{flexDirection:'row',width:"85%",alignItems:'center',backgroundColor:'#353564',borderRadius:20,paddingHorizontal:10}}> 

                  <EvilIcons 
                    name="search" 
                    color="grey" 
                    size={28}  
                    /> 

                  <TextInput 
                  style={{color:'black',fontSize:15,fontStyle:'normal',width:'90%'}}
                    placeholder="  search" 
                    placeholderTextColor="#AAA"
                 />                

                  </View>

                  <Image source={require('./assets/user.png')}
                  style={{width: 40, height: 40,marginLeft:10}}/>

              </View>

              <View style={{marginTop:10}}>
                      <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,justifyContent:'space-between'}}>

                              <Text style={{color:'#f5f6fa',fontWeight:'bold',paddingBottom:5,fontSize:30}}>Discover</Text>
                              <Text style={{color:'pink',paddingBottom:5}}>View all</Text>

                      </View>
     
                  <FlatList
                      data={live}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{
                        paddingLeft:15
                      }}
                  />

                  {/*<ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{
                        paddingLeft:15
                      }}

                  >


                     <ImageBackground source={require('./assets/livestreamUser.png')}
                            style={{width: 130, height: 220,marginHorizontal:1,overflow:'hidden',borderRadius:15}}>
                              <LinearGradient
                                    colors={['#130f4000', 'transparent','transparent', '#2f3640']}
                                    style={{ flex:1 ,justifyContent:'space-between'}}
                              >

                          <View  style={{flexDirection:'row',alignSelf:'flex-end',width:"43%",backgroundColor:'pink',borderRadius:15,alignItems:'center',marginTop:8,marginRight:5}}> 

                          <MaterialIcons 
                            name="videocam" 
                            color="white" 
                            size={18}  
                            /> 
                            <Text style={{color:'white',fontWeight:'100'}}>LIVE</Text>              

                          </View>

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

                  </ScrollView>*/}
                  </View> 

            <View style={{backgroundColor:'s',paddingHorizontal:10,marginTop:20,alignSelf:'center',
                      marginHorizontal:15,paddingBottom:2,marginBottom:5,borderRadius:10,
                      shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}>

                  <View  style={{ justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}> 

                  <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>

                  <Image source={require('./assets/user.png')}
                    style={{width: 45, height: 45}}/>

                    <View style={{}}>
                  <Text style={{color:'white'}}> Alhandro</Text>
                  <Text style={{color:'grey',marginTop:1}}> 2 hours ago </Text>
                  </View>

                    </View>
                                      
                    <Entypo 
                    name="dots-three-horizontal" 
                    color="grey" 
                    size={18}  
                    />

                    </View>

                    <Text style={{color:'#b33939',marginTop:4}}>#relax, #travel</Text>
                    <Text style={{color:'white',marginTop:4}}>Airport Hotels The Right Way To Start A Short              
                    
                    </Text> 
                    <Text style={{color:'white',marginTop:4}}>Break Holiday</Text>                    

                    <ImageBackground source={require('./assets/cult.jpg')} style={{height:165,width:350,borderRadius:10,overflow:'hidden',alignSelf:'center'}}>
                    <View  style={{flexDirection:'row',width:"15%",justifyContent:'center',alignItems:'center',backgroundColor:'#ff5252',borderRadius:20,alignSelf:'flex-end',marginTop:10,marginRight:10}}> 

                        <FontAwesome 
                          name="video-camera" 
                          color="white" 
                          size={10}  
                          /> 
                          <Text style={{color:'white',fontSize:12,marginLeft:3}}>LIVE</Text>              

                    </View>
                    </ImageBackground>

           
              </View>                                                                                      


    </View>


  );
}
  }

