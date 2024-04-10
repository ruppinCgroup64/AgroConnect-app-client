import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar,} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ForgotPass() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:15}]}>
        <AppBar 
            color={theme.bg}
            title='Forgot Password'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Icon name="arrow-back"  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={theme.a2}
            resizeMode='stretch'
            style={{height:height/3.5,width:width/1.4,alignSelf:'center',marginTop:30}}>
        </Image>

        <Text style={[style.r18,{color:theme.txt,marginTop:35}]}>Select which contact details should we use to reset your password</Text>

        <View style={{flexDirection:'row',alignItems:'center',padding:15,borderWidth:1,borderRadius:20,marginTop:25,borderColor:theme.border,backgroundColor:theme.borderbg}}>
        <Avatar.Icon icon="chat-processing"  
            style={{backgroundColor:'#01B76310',}}  
            color={Colors.primary} size={60}
            />
            <View style={{marginHorizontal:20}}>
                <Text style={[style.r14,{color:theme.disable}]}>via SMS:</Text>
                <Text style={[style.b16,{color:theme.txt}]}>+1 111 ******99</Text>
            </View>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',padding:15,borderWidth:1,borderRadius:20,marginTop:20,borderColor:theme.border,backgroundColor:theme.borderbg}}>
        <Avatar.Icon icon="email"  
            style={{backgroundColor:'#01B76310',}}  
            color={Colors.primary} size={60}
            />
            <View style={{marginHorizontal:20}}>
                <Text style={[style.r14,{color:theme.disable}]}>via Email:</Text>
                <Text style={[style.b16,{color:theme.txt}]}>and***ley@yourdomain.com</Text>
            </View>
        </View>

        <View style={{marginTop:40,marginBottom:20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Otp1')} 
            style={[style.btn]}>
            <Text style={style.btntxt}>Continue</Text>
        </TouchableOpacity>
        </View>
        
    </ScrollView>
    </View>
    </SafeAreaView>
  )
}