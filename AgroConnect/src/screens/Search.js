import { View, Text, Platform, SafeAreaView, TextInput, StatusBar, ImageBackground,TouchableOpacity, Image, ScrollView, Dimensions,KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Search() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null} >
    <View style={[style.main, { backgroundColor: theme.bg,marginTop:15 }]}>

        <View style={[style.inputContainer, { backgroundColor: theme.input, marginTop: 15, borderColor: theme.border,}]}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchR')}>
                <Icon name="search" size={20} color={Colors.disable} />
            </TouchableOpacity>
            <TextInput placeholder='Search'
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={{color: theme.txt, fontFamily: 'Urbanist-Regular',flex:1,marginLeft:10}} />
            <TouchableOpacity>
                <Image source={require('../../assets/image/Filter.png')}
                style={{width:width/19,height:height/35,alignSelf:'center',marginLeft:5}}></Image>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={[style.t1,{color:theme.txt}]}>Recent</Text>
            <Text style={[style.b16,{color:Colors.primary}]}>Clear All</Text>
        </View>

        <View style={[style.divider,{backgroundColor:theme.border,marginTop:20,marginBottom:10}]}></View>

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Silver Nerve Plant</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Fibre Optic Grass Plant</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Snake Plant</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>String Of Pearls</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Peace Lily</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Chinese Money Plant</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Air Plant </Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.m18,{color:theme.txt3}]}>Water Bamboo</Text>
                <Image source={require('../../assets/image/a4.png')} resizeMode='stretch'
                style={{width:width/15,height:height/35,alignSelf:'center', tintColor:theme.txt3}}></Image>
            </View>

        </ScrollView>

    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}