import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar,} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TransactionHistory() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:10}]}>

    <AppBar 
            color={theme.bg}
            title='Transaction History'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
                <Icon name="arrow-back"  
                color={theme.txt} size={30}
                />
                </TouchableOpacity>
            }
            trailing={<TouchableOpacity >
                <Icon name="search"  
                color={theme.txt} size={25}
                /></TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/i1.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Prayer Plant</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$29</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Dec 15, 2024 | 10:00 AM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: height / 13, width: width / 5.8,alignSelf:'center'}} />
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Top Up Wallet</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$100</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Dec 14, 2024 | 16:42 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Top Up</Text>
                            <Icons name="arrow-down-box" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Rubber Fig Plant</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$99</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Dec 14, 2024 | 11:39 AM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/i2.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>ZZ Plant</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$50</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Dec 13, 2024 | 14:46 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: height / 13, width: width / 5.8,alignSelf:'center'}} />
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Top Up Wallet</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$75</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Dec 12, 2024 | 09:27 AM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Top Up</Text>
                            <Icons name="arrow-down-box" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/a14.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Sansevieria Trifasciata</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$49</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Nov 11, 2024 | 13:56 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/a15.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Chinese Money Plant</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$35</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Nov 10, 2024 | 15:44 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/Onbor2.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Aspidistra Elatior</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$44</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Nov 09, 2024 | 10:35 AM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: height / 13, width: width / 5.8,alignSelf:'center'}} />
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Top Up Wallet</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$150</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Nov 08, 2024 | 18:49 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Top Up</Text>
                            <Icons name="arrow-down-box" color={Colors.primary} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
                <View style={{ height: height / 13, width: width / 5.8 ,backgroundColor:theme.bg3,borderRadius:50}} >
                    <Image source={require('../../assets/image/Onbor1.png')} resizeMode='stretch' style={{ height: height / 14, width: width / 6,alignSelf:'center'}} />
                </View>
                <View style={{flex:1}}>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={[style.b18,{color:theme.txt}]}>Yucca Plant</Text>
                        <Text style={[style.b16,{color:Colors.primary,}]}>$39</Text>
                    </View>
                    <View style={{marginLeft:10,flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <Text style={[style.m14,{color:theme.txt3}]}>Nov 07, 2024 | 12:27 PM</Text>
                        <View style={{flexDirection:'row',alignItems:'center',}}>
                            <Text style={[style.m14, { color: theme.txt3 }]}>Orders</Text>
                            <Icons name="arrow-up-box" color={'#F75555'} size={20} style={{ marginLeft: 5 }} />
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    </View>
    </SafeAreaView>
  )
}