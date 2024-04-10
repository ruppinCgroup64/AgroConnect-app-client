import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    ScrollView, Modal,
    Platform,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Amount() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Top Up Wallet'
                    titleStyle={[style.apptitle, { color: theme.txt, }]} elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.navigate('MyTabs')}
                    >
                        <Icon name="arrow-left" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[style.s16, { color: theme.txt2, marginTop:20,textAlign:'center' }]}>Enter the amount of top up</Text>
            <View style={[style.inputContainer,{height:90,marginTop:20,borderColor:Colors.primary,borderWidth:1.5,justifyContent:'center',borderRadius:25}]}>
                <TextInput placeholder='$100' placeholderTextColor={Colors.primary} 
                selectionColor={Colors.primary}
                style={{color:theme.txt,fontSize:30}}
                keyboardType='phone-pad'
                />
            </View>
            <View style={{flexDirection:'row',marginTop:15}}>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1,marginHorizontal:10}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$20</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$50</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:15}}>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1,marginHorizontal:10}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$200</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$250</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginVertical:15}}>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1,marginHorizontal:10}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$750</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1,borderRadius:20,paddingVertical:5,flex:1}}>
                <Text style={[style.b18, { color: Colors.primary,textAlign:'center' }]}>$1000</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('TopUpMethod')}
                style={style.btn}>
                <Text style={style.btntxt}>Continue</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}