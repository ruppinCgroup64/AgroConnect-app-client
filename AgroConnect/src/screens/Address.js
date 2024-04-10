import { View, Text, SafeAreaView, TextInput, StatusBar, ImageBackground,TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Address() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <View style={[style.main, { backgroundColor: theme.bg, }]}>
        <AppBar 
            color={theme.bg}
            title='Address'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
            <Icon name="arrow-back"  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>}
        //     trailing={ <TouchableOpacity>
        //     <Icon name="search"  
        //     // style={{backgroundColor:Colors.secondary,}}  
        //     color={theme.txt} size={25}
        //     />
        //     </TouchableOpacity>
        // }
        />

        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>

        <View style={{backgroundColor:theme.input,padding:10,flexDirection:'row',alignItems:'center',borderRadius:15,marginTop:20}}>
            <Image source={require('../../assets/image/a10.png')}
            resizeMode='stretch'
            style={{height:height/15,width:width/6.8}}></Image>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between',marginLeft:10,marginRight:6}}>
                <View style={{flex:1}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={[style.b18,{color:theme.txt,marginRight:10}]}>Home</Text>
                        <View style={{paddingHorizontal:10,paddingVertical:5,backgroundColor:theme.btn,borderRadius:5}}>
                            <Text style={[style.s10,{color:theme.txt}]}>Default</Text>
                        </View>
                    </View>
                    <Text style={[style.m14,{color:theme.txt2,marginTop:3,flex:1}]}>61480 Sunbrook Park, PC 5679</Text>
                </View>
                <Icons name='pencil' size={20} color={Colors.primary}></Icons>
            </View>
        </View>

        <View style={{backgroundColor:theme.input,padding:10,flexDirection:'row',alignItems:'center',borderRadius:15,marginTop:20,}}>
            <Image source={require('../../assets/image/a10.png')}
            resizeMode='stretch'
            style={{height:height/15,width:width/6.8}}></Image>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between',marginLeft:10,marginRight:6}}>
                <View style={{flex:1}}>
                    <Text  style={[style.b18,{color:theme.txt,marginRight:10}]}>Office</Text>
                    <Text style={[style.m14,{color:theme.txt2,marginTop:3,}]}>6993 Meadow Valley Terra, PC 3637</Text>
                </View>
                <Icons name='pencil' size={20} color={Colors.primary} ></Icons>
            </View>
        </View>

        <View style={{backgroundColor:theme.input,padding:10,flexDirection:'row',alignItems:'center',borderRadius:15,marginTop:20,}}>
            <Image source={require('../../assets/image/a10.png')}
            resizeMode='stretch'
            style={{height:height/15,width:width/6.8}}></Image>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between',marginLeft:10,marginRight:6}}>
                <View style={{flex:1}}>
                    <Text  style={[style.b18,{color:theme.txt,marginRight:10}]}>Apartment</Text>
                    <Text style={[style.m14,{color:theme.txt2,marginTop:3}]}>21833 Clyde Gallagher, PC 4662</Text>
                </View>
                <Icons name='pencil' size={20} color={Colors.primary} ></Icons>
            </View>
        </View>

        <View style={{backgroundColor:theme.input,padding:10,flexDirection:'row',alignItems:'center',borderRadius:15,marginTop:20,}}>
            <Image source={require('../../assets/image/a10.png')}
            resizeMode='stretch'
            style={{height:height/15,width:width/6.8}}></Image>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between',marginLeft:10,marginRight:6}}>
                <View style={{flex:1}}>
                    <Text  style={[style.b18,{color:theme.txt,marginRight:10}]}>Parent's House</Text>
                    <Text style={[style.m14,{color:theme.txt2,marginTop:3}]}>5259 Blue Bill Park, PC 4627</Text>
                </View>
                <Icons name='pencil' size={20} color={Colors.primary} ></Icons>
            </View>
        </View>

        <View style={{backgroundColor:theme.input,padding:10,flexDirection:'row',alignItems:'center',borderRadius:15,marginTop:20,}}>
            <Image source={require('../../assets/image/a10.png')}
            resizeMode='stretch'
            style={{height:height/15,width:width/6.8}}></Image>
            <View style={{flexDirection:'row',alignItems:'center',flex:1,justifyContent:'space-between',marginLeft:10,marginRight:6}}>
                <View style={{flex:1}}>
                    <Text  style={[style.b18,{color:theme.txt,marginRight:10}]}>Town Square</Text>
                    <Text style={[style.m14,{color:theme.txt2,marginTop:3}]}>5375 Summerhouse, PC 4627</Text>
                </View>
                <Icons name='pencil' size={20} color={Colors.primary} ></Icons>
            </View>
        </View>

        <View style={{marginTop:60,marginBottom:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}
            style={[style.btn,{}]}>
            <Text style={[style.btntxt,{}]}>Add New Address</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
    </View>
    </SafeAreaView>
  )
}