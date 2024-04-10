import { View, Text , Platform,SafeAreaView,Dimensions, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
import  Icon  from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewCard() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:15}]}>
            <AppBar 
            color={theme.bg}
            title='Add New Card'
            titleStyle={[style.apptitle,{color:theme.txt}]}
            
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Payment')}>
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
            <View style={{marginTop:20}}>
                <Image source={require('../../assets/image/a11.png')}
                resizeMode='stretch'
                style={{width:width-40,height:height/4.2}}></Image>
            </View>

            <Text style={[style.b18,{color:theme.txt,marginTop:25}]}>Card Name</Text>
            <View style={[{backgroundColor:theme.input,marginTop:10,borderRadius:10}]}>
            <TextInput placeholder='Andrew Ainsley'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,style.s14,{paddingHorizontal:10,color:theme.txt,borderColor:theme.input,}]}
                    />
            </View>

            <Text style={[style.b18,{color:theme.txt,marginTop:20}]}>Card Number</Text>
            <View style={[{backgroundColor:theme.input,marginTop:10,borderRadius:10}]}>
            <TextInput placeholder='2672 4738 7837 7285'
                    keyboardType='phone-pad'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,style.s14,{paddingHorizontal:10,color:theme.txt,borderColor:theme.input,}]}
                    />
            </View>

            <View style={{flexDirection:'row'}}>

            <View style={{flex:1}}>
            <Text style={[style.b18,{color:theme.txt,marginTop:20}]}>Expiry Date</Text>
                <View style={[{backgroundColor:theme.input,marginTop:10,flex:1,borderRadius:10}]}>
                <TextInput placeholder='Expiry Date'
                        keyboardType='phone-pad'
                        selectionColor={Colors.primary}
                        placeholderTextColor={Colors.disable}
                        style={[style.txtinput,style.s14,{paddingHorizontal:10,color:theme.txt,borderColor:theme.input}]}
                        />
                </View>
            </View>
            
            <View style={{padding:10}}></View>
            <View style={{flex:1}}>
                <Text style={[style.b18,{color:theme.txt,marginTop:20}]}>CVV</Text>
                <View style={[{backgroundColor:theme.input,marginTop:10,flex:1,borderRadius:10}]}>
                <TextInput placeholder='699'
                        keyboardType='phone-pad'
                        selectionColor={Colors.primary}
                        placeholderTextColor={Colors.disable}
                        style={[style.txtinput,style.s14,{paddingHorizontal:10,color:theme.txt,borderColor:theme.input}]}
                        />
                </View>
            </View>
            
            </View>

            <View style={{marginTop:50,marginBottom:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')} 
                style={[style.btn,{}]}>
                <Text style={[style.btntxt,{}]}>Add</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}