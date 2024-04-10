import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar, HStack } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function CustomerService() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
        <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
    <View style={[style.main, { backgroundColor: theme.bg ,marginTop:10}]}>
        <AppBar
            color={theme.bg}
            title='Customer Service'
            titleStyle={[style.t1, { color: theme.txt, }]}
            elevation={0}
            leading={<TouchableOpacity onPress={() => navigation.navigate('Helpcenter')}>
                <Icons name="arrow-left" color={theme.txt} size={25} />
            </TouchableOpacity>
            }
            trailing={<HStack>
                <Icons name="phone-outline" color={theme.txt} size={25} style={{ marginRight: 10 }} />
                <Icons name="dots-horizontal-circle-outline" color={theme.txt} size={25} />
            </HStack>
            }
        />
        <View style={{ marginVertical: 15, alignItems: 'center' }}>
            <View style={{ paddingVertical: 5, backgroundColor: '#75757520', paddingHorizontal: 20, borderRadius: 10 }}>
                <Text style={[style.r10, { color: '#757575', textAlign: 'center' }]}>Today</Text>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, width: width / 1.5, backgroundColor: theme.chat, padding: 10, borderTopRightRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: theme.txt }]}>Hello, good morning.</Text>
                <Text style={[style.r14, { color: theme.txt3, }]}>09:41</Text>
            </View>
            <View style={{ flexDirection: 'row',  marginVertical: 10, width: width / 1.5, backgroundColor: theme.chat, padding: 10, borderTopRightRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: theme.txt,flex:1 }]}>I am a Customer Service, is there anything I can help you with? 😄</Text>
               <View style={{ justifyContent:'flex-end'}}>
               <Text style={[style.r14, { color: theme.txt3,}]}>09:41</Text>
               </View>
            </View>
            <View style={{alignItems:'flex-end'}}>
            <View style={{ flexDirection: 'row',   width: width / 1.5, backgroundColor: Colors.primary, padding: 10, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: Colors.secondary,flex:1 }]}>Hi, I'm having problems with my shipping.</Text>
               <Text style={[style.r14, { color: Colors.secondary}]}>09:41</Text>
            </View>
            <View style={{ flexDirection: 'row',marginVertical:10,   width: width / 1.5, backgroundColor: Colors.primary, padding: 10, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: Colors.secondary,flex:1 }]}>Can you help me?</Text>
                <View style={{ justifyContent:'flex-end'}}>
               <Text style={[style.r14, { color: Colors.secondary}]}>09:41</Text>
               </View>
            </View>
            
            </View>
            <View style={{ flexDirection: 'row',  marginVertical: 10, width: width / 1.5, backgroundColor: theme.chat, padding: 10, borderTopRightRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: theme.txt,flex:1 }]}>Of course...</Text>
               <View style={{ justifyContent:'flex-end'}}>
               <Text style={[style.r14, { color: theme.txt3,}]}>09:41</Text>
               </View>
            </View>
            <View style={{ flexDirection: 'row',   width: width / 1.5, backgroundColor: theme.chat, padding: 10, borderTopRightRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <Text style={[style.r16, { color: theme.txt,flex:1 }]}>Can you tell me the problem you are having? so I can help solve it 😁</Text>
               <View style={{ justifyContent:'flex-end'}}>
               <Text style={[style.r14, { color: theme.txt3,}]}>09:41</Text>
               </View>
            </View>

        </ScrollView>
    </View>
    <View style={{marginHorizontal:20,marginBottom:20,flexDirection:'row',alignItems:'center'}}>
        <View style={[style.inputContainer,{backgroundColor:theme.input,borderColor:theme.input,flexDirection:'row',alignItems:'center',flex:1}]}>
            <TextInput placeholder='Mesage...'
            placeholderTextColor={Colors.disable}
            style={[style.r14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
            selectionColor={Colors.primary}
            />
            <Icon name='image-outline' size={20} color={Colors.disable}/>
        </View>
        <Avatar.Icon icon='microphone' size={45} color={Colors.secondary} style={{backgroundColor:Colors.primary,marginLeft:5}}/>
    </View>
    </KeyboardAvoidingView>
</SafeAreaView>
  )
}