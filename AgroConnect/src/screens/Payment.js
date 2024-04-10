import { View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,Dimensions,} from 'react-native'
import React,{useState,useContext} from 'react'
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Payment() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg}]}>
    
        <AppBar 
            color={theme.bg}
            title='Payments'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
            <Icon name="arrow-back"  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>}
            trailing={ <TouchableOpacity>
                <Icon name="ellipsis-horizontal-circle"  
                color={theme.txt} size={30}
                />
                </TouchableOpacity>}
        />

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,padding:15,borderRadius:10,marginTop:20}]}>
                <Image source={require('../../assets/image/paypal.png')}
                    resizeMode='stretch'
                    style={{height:height/30,width:width/13.5}}></Image>
                <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>PayPal</Text>
                <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
            </View>

            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,padding:15,borderRadius:10,marginTop:20}]}>
                <Image source={require('../../assets/image/Google.png')}
                    resizeMode='stretch'
                    style={{height:height/30,width:width/13.5}}></Image>
                <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>Google Pay</Text>
                <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
            </View>
        

            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,padding:15,borderRadius:10,marginTop:20}]}>
                <Image source={theme.apple}
                    resizeMode='stretch'
                    style={{height:height/30,width:width/13.5}}></Image>
                <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>Apple Pay</Text>
                <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
            </View>
        

            <View style={[{flexDirection:'row',alignItems:'center',backgroundColor:theme.input,padding:15,borderRadius:10,marginTop:20}]}>
                <Image source={theme.a9}
                    resizeMode='stretch'
                    style={{height:height/30,width:width/11}}></Image>
                <Text style={[style.b18,{color:theme.txt,flex:1,marginHorizontal:10}]}>•••• •••• •••• •••• 4679</Text>
                <Text style={[style.b14,{color:Colors.primary}]}>Connected</Text>
            </View>
            

            

        </ScrollView>   
        <View style={{marginBottom:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('NewCard')} 
                style={[style.btn,{}]}>
                    <Text style={[style.btntxt,{}]}>Add New Card</Text>
                </TouchableOpacity>
            </View> 
    </View>
    </SafeAreaView>
  )
}