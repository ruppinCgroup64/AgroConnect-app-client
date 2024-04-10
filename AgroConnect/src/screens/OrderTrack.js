import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView, Modal, SafeAreaView, } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function OrderTrack() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:10}]}>
                <AppBar
                    color={theme.bg}
                    title={<Text style={[style.apptitle, { color: theme.txt, }]}>Track Order</Text>}
                    elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.navigate('MyTabs')}
                    >
                        <Icons name="arrow-left" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                    trailing={<Icon name="search" color={theme.txt} size={22} />}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:theme.bg2, borderRadius: 20, backgroundColor:theme.input, borderRadius: 20, padding: 10,marginTop:10}}>
                    <View style={{ height: height / 10, width: width / 4.3 ,backgroundColor:theme.bg3,borderRadius:15}} >
                        <Image source={require('../../assets/image/i1.png')} resizeMode='stretch' style={{ height: height / 10, width: width / 4.5}} />
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={[style.b18, { color: theme.txt,}]}>Prayer Plant</Text>
                        <Text style={[style.m12,{color:theme.txt3,marginHorizontal:10,marginTop:4}]}>Qty = 1</Text>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:5}}>
                            <Text style={[style.b18,{color:Colors.primary}]}>$29</Text>
                        </View>
                    </View>   
                    </View>

                   <Image source={theme.a7} resizeMode='stretch' style={{width:width-40,height:height/15,marginTop:20}}></Image>

                   <Text style={[style.b18,{color:theme.txt,textAlign:'center',marginTop:20}]}>Packet In Delivery</Text>

                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>

                    <Text style={[style.subtitle,{color:theme.txt,marginTop:5}]}>Order Status Details</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:20}}>
                        <Avatar.Image source={require('../../assets/image/a8.png')} style={{ backgroundColor: theme.bg }} size={36} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.b16, { color: theme.txt,flex:1 }]}>Order In Transit - Dec 17</Text>
                                <Text style={[style.s10,{color:theme.txt3}]}>15:20 PM</Text>
                            </View>
                            <Text style={[style.m14, { color: theme.disable }]}>32 Manchester Ave. Ringgold, GA 30736</Text>
                        </View>
                    </View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }}></View>
                    <View style={{ height: 8, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderRadius: 2 }}></View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginBottom: 0 }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Avatar.Image source={require('../../assets/image/a8.png')} style={{ backgroundColor: theme.bg }} size={36} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={[style.b16, { color: theme.txt ,flex:1}]}>Order ... Customs Port - Dec 16</Text>
                            <Text style={[style.s10,{color:theme.txt3}]}>14:40 PM</Text>
                        </View>
                            <Text style={[style.m14, { color: theme.disable }]}>4 Evergreen Street Lake Zurich, IL 60047</Text>
                        </View>
                    </View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }}></View>
                    <View style={{ height: 8, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderRadius: 2 }}></View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginBottom: -22 }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Avatar.Image source={require('../../assets/image/a8.png')} style={{ backgroundColor: theme.bg }} size={36} />
                        <View style={{ marginLeft: 10, flex: 1 }}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={[style.b16, { color: theme.txt,flex:1 }]}>Orders are ... Shipped - Dec 15</Text>
                            <Text style={[style.s10,{color:theme.txt3}]}>11:30 AM</Text>
                        </View>
                            <Text style={[style.m14, { color: theme.disable }]}>9177 Hillcrest Street Wheeling, WV 26003</Text>
                        </View>
                    </View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }}></View>
                    <View style={{ height: 8, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderRadius: 2 }}></View>
                    <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginBottom: 0 }}></View>
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/a8.png')} style={{ backgroundColor: theme.bg }} size={36} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.b16, { color: theme.txt,flex:1 }]}>Order is in Packing - Dec 15</Text>
                                <Text style={[style.s10,{color:theme.txt3}]}>10:25 AM</Text>
                            </View>
                                <Text style={[style.m14, { color: theme.disable }]}>891 Glen Ridge St. Gainesville, VA 20155</Text>
                            </View>
                        </View>
                        <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, borderBottomRightRadius: 2, borderBottomLeftRadius: 2 }}></View>
                        <View style={{ height: 8, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderRadius: 2 }}></View>
                        <View style={{ height: 5, width: 2, backgroundColor: '#BDBDBD', marginLeft: 18, marginTop: 5, borderTopRightRadius: 2, borderTopLeftRadius: 2, marginBottom: -22 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/a8.png')} style={{ backgroundColor: theme.bg }} size={36} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.b16, { color: theme.txt ,flex:1}]}>Verified Payments - Dec 15</Text>
                                <Text style={[style.s10,{color:theme.txt3}]}>10:04 AM</Text>
                            </View>
                                <Text style={[style.m14, { color: theme.disable }]}>55 Summerhouse Dr. Apopka, FL 32703</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ paddingVertical: 20, }}>
                        <TouchableOpacity  style={[style.btn,{backgroundColor:theme.skip}]}>
                            <Text style={[style.btntxt,{color:Colors.primary}]}>Report an Issue</Text>
                        </TouchableOpacity>
                    </View> */}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}