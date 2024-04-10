import { View, Text ,SafeAreaView, TextInput, Dimensions,StatusBar,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PrivacyPolicy() {
    
    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:10}]}>

    <AppBar 
        color={theme.bg}
        title='Privacy Policy'
        titleStyle={[style.apptitle,{color:theme.txt}]}
        elevation={0}
        leading={ <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
        <Icon name="arrow-back"  
        color={theme.txt} size={30}
        />
        </TouchableOpacity>}
        />

    <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={[style.t1,{color:theme.txt,marginTop:30}]}>1. Types of Data We Collect</Text>
        <Text style={[style.r14,{color:theme.txt2,marginTop:20,lineHeight:18}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

        <Text style={[style.t1,{color:theme.txt,marginTop:30}]}>2. Use of Your Personal Data</Text>
        <Text style={[style.r14,{color:theme.txt2,marginTop:20,lineHeight:18}]}>Magna etiam tempor orci eu lobortis elementum nibh. Vulputate enim nulla aliquet porttitor lacus. Orci sagittis eu volutpat odio. Cras semper auctor neque vitae tempus quam pellentesque nec. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Commodo elit at imperdiet dui. Nisi vitae suscipit tellus mauris a diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Mi ipsum faucibus vitae aliquet nec ullamcorper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et.</Text>

        <Text style={[style.t1,{color:theme.txt,marginTop:30}]}>3. Disclosure of Your Personal Data</Text>
        <Text style={[style.r14,{color:theme.txt2,marginTop:20,lineHeight:18,marginBottom:10}]}>Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nibh tellus molestie nunc non blandit massa. Quam pellentesque nec nam aliquam sem et tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nunc consequat interdum varius sit amet. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et. Lorem donec massa sapien faucibus et molestie. Massa tempor nec feugiat nisl pretium fusce id. Lacinia at quis risus sed vulputate odio. Integer vitae justo eget magna fermentum iaculis. Eget gravida cum sociis natoque penatibus et magnis.</Text>

    </ScrollView>

    </View>
    </SafeAreaView>
  )
}