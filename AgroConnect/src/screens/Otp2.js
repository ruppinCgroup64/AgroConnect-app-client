import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, SafeAreaView, TextInput, ScrollView, Modal,TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext ,useRef} from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'


// import OTPInputView from '@twotalltotems/react-native-otp-input'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp2() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)

    const e1 = useRef();
    const e2 = useRef();
    const e3 = useRef();
    const e4 = useRef();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Enter Your PIN'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Payment1')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        } />

                    <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 20, }]}>Enter your PIN to confirm payment</Text>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", paddingTop: 50 }}>
                        <TextInput ref={e1}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e2.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e2}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e3.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e3}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />
                        <TextInput ref={e4}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: theme.txt, borderColor: theme.border, backgroundColor: theme.input, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus();
                                }
                            }}
                        />

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => setVisible(true)}
                            style={style.btn}>
                            <Text style={[style.btntxt, {}]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Modal transparent={true}
                    visible={visible}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#000000aa',
                        transparent: 'true'
                    }}>
                        <View style={[style.modalcontainer, { backgroundColor: theme.bg2, width: width - 40, marginVertical: 140 }]}>
                            <View style={{ marginTop: 5, marginHorizontal: 20 }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => { setVisible(false) }}>
                                        <Icon name="close-outline" color={theme.txt} size={24} />
                                    </TouchableOpacity>
                                </View>
                                <Image source={require('../../assets/image/m2.png')}
                                    style={{ height: height / 5.7, width: width / 2.5, alignSelf: 'center', resizeMode: 'stretch' }}>
                                </Image>
                                <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center', marginTop:5}]}>Order Successful!</Text>
                                <Text style={[style.r16, { color: theme.txt, textAlign: 'center', marginTop: 5, }]}>You have successfully made order</Text>
                                <TouchableOpacity onPress={() => {setVisible(false),navigation.navigate('MyTabs')}}
                                    style={[style.btn, { marginTop: 20 }]}>
                                    <Text style={[style.btntxt, {}]}>View Order</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {setVisible(false),navigation.navigate('Ticket')}}
                                    style={[style.btn, { backgroundColor: theme.btn, marginVertical: 20 }]}>
                                    <Text style={[style.btntxt, { color: theme.btntxt, }]}>View E-Receipt</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </Modal>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}