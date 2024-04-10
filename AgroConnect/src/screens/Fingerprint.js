import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, Modal } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { BallIndicator, } from 'react-native-indicators'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Fingerprint() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                <AppBar
                    color={theme.bg}
                    title='Set Your Fingerprint'
                    titleStyle={[style.apptitle, { color: theme.txt, }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Otp')}>
                        <Icon name="arrow-back"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 30, }]}>Add a fingerprint to make your account more secure.</Text>

                <View style={{ flex: 1, marginTop: 10, justifyContent: 'center' }}>
                    <Image source={require('../../assets/image/fingerprint.png')}
                        style={{ height: height / 4.5, width: width / 1.7, alignSelf: 'center', resizeMode: 'stretch' }}>
                    </Image>
                </View>

                <Text style={[style.r18, { color: theme.txt, textAlign: 'center', marginTop: 30, marginBottom: 40, }]}>Please put your finger on the fingerprint scanner to get started.</Text>

                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { flex: 1, backgroundColor: theme.btn }]}>
                        <Text style={[style.btntxt, { color: theme.btntxt, }]}>Skip</Text>
                    </TouchableOpacity>
                    <View style={{ margin: 5 }}></View>
                    <TouchableOpacity onPress={() => setVisible(true)}
                        style={[style.btn, { flex: 1 }]}>
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
                            <Image source={require('../../assets/image/m1.png')}
                                style={{ height: height / 5.7, width: width / 2.5, alignSelf: 'center', resizeMode: 'stretch' }}>
                            </Image>
                            <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center', marginTop: 10 }]}>Congratulations</Text>
                            <Text style={[style.r14, { color: theme.txt, textAlign: 'center', marginTop: 5, }]}>Your account is ready to use. You will be redirected to the Home page in a few seconds..</Text>
                            <BallIndicator size={30} color={Colors.primary} style={{ marginTop: 30 }} />
                            <TouchableOpacity onPress={() => { setVisible(false), navigation.navigate('MyTabs') }}
                                style={[style.btn, { marginVertical: 30 }]}>
                                <Text style={[style.btntxt, {}]}>Continue</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </Modal>
        </SafeAreaView >
    )
}