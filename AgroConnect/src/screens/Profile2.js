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
    ScrollView,
    Switch,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons'
import { EventRegister } from 'react-native-event-listeners'
import RBSheet from 'react-native-raw-bottom-sheet';



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Profile2() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState('false')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Profile'
                    titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Bold' }}
                    // centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity
                    // onPress={() => navigation.navigate('Login')}
                    >
                        <Image source={require('../../assets/image/Logo.png')}
                            style={{ resizeMode: 'stretch', height: height / 25, width: width / 12 }}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity
                    // onPress={() => navigation.navigate('Login')}
                    >
                        <Icon name="dots-horizontal-circle-outline"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ paddingTop: 20 }}>
                        <Image source={require('../../assets/image/User.png')}
                            style={{
                                resizeMode: 'stretch',
                                alignSelf: 'center',
                                height: height / 8,
                                width: width / 3.6
                            }}
                        />
                    </View>
                    <View style={{ paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>Andrew Ainsley</Text>
                        <Text style={[style.s14, { color: theme.txt, marginTop: 5 }]}>+1 111 467 378 399</Text>
                    </View>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={[style.divider, { backgroundColor: theme.border }]} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile1')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name='person-outline' size={25} color={theme.txt} />
                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Edit Profile</Text>
                            <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                        </View>
                    </TouchableOpacity>

                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Address')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icons name='location-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Address</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Notification1')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='bell-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Notification</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='wallet-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Payment</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Security')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icons name='shield-checkmark-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Security</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Language')}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='google-circles-communities' size={25} color={theme.txt} />
                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Language</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10, marginRight: 5 }]}>English(US)</Text>
                            <Icon name='chevron-right' color={theme.txt} size={30} />
                        </View>
                    </TouchableOpacity>



                    <View style={{ paddingTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='eye-outline' size={25} color={theme.txt} />
                            <Text style={[style.s18, { color: theme.txt, marginLeft: 10 }]}>Dark Theme</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 7 }}>
                                <Switch
                                    trackColor={{ false: Colors.primary, true: Colors.primary }}
                                    thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    value={darkMode}
                                    onValueChange={
                                        (value) => {
                                            setDarkMode(value);
                                            EventRegister.emit('ChangeTheme', value)
                                        }
                                    }
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='lock-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Privacy Policy</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Helpcenter')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icons name='information-circle-outline' size={25} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Help Center</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Invited')}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='account-group-outline' size={27} color={theme.txt} />
                                <Text style={[style.s18, { color: theme.txt, marginLeft: 10, flex: 1 }]}>Invite Friends</Text>
                                <Icons name='chevron-forward' size={20} color={theme.txt}></Icons>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 15, marginBottom: 70 }}>
                        <TouchableOpacity onPress={() => this.RBSheet10.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet10 = ref;
                            }}
                                height={250}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                    <Text style={[style.apptitle, { textAlign: 'center', color: '#F75555' }]}>Logout</Text>
                                    <View style={[style.divider, { marginVertical: 10, backgroundColor: '#EEEEEE' }]}></View>

                                    <View style={{ paddingTop: 20 }}>
                                        <Text style={[style.b18, { color: theme.txt, textAlign: 'center', }]}>Are you sure you want to log out?</Text>
                                    </View>
                                    <View style={{ marginTop: 25, flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            onPress={() => this.RBSheet10.close()}
                                            style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: theme.btntxt }]}>Cancel</Text>
                                        </TouchableOpacity>
                                        <View style={{ margin: 5 }}></View>
                                        <TouchableOpacity
                                            onPress={() => { this.RBSheet10.close(), navigation.navigate('Login') }}
                                            style={[style.btn, { flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: Colors.secondary }]}>Yes, Logout</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>
                            </RBSheet>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='logout' size={25} color='#F75555' />
                                <Text style={[style.txt, { color: '#F75555', marginLeft: 10 }]}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}