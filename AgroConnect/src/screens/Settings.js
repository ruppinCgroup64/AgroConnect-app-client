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
import React, { useState, useContext, useEffect } from "react";
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
import Settings_option from '../components/Settings_option';
import { UsersContext } from "../Context/UserContext";
import ImageProfile from '../components/ImageProfile';



const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

// An Array containing every option's details
/* key → a unique for each option
   navTo → the navigation address of where the option leads
   t → the text that will display for the user for that option
   i → the icon name of the option, using the import Icons  */
const settings_details = [
    { key: 0, navTo: 'EditProfile', t: 'עריכת פרטים אישיים', i: 'person-outline' },
    { key: 1, navTo: 'EditProfile', t: 'מחובר בתור', i: 'enter-outline' },
    { key: 2, navTo: 'EditProfile', t: 'אודות', i: 'alert-circle-outline' },
];



export default function Settings() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { user } = useContext(UsersContext);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>


                {/* The Top Bar of the settings */}
                <AppBar
                    color={theme.bg}
                    title='הגדרות'
                    titleStyle={{ color: theme.txt, fontFamily: 'Urbanist-Bold' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    >
                        <Image source={require('../../assets/image/Logo.png')}
                            style={{ resizeMode: 'stretch', height: height / 25, width: width / 12 }}
                        />
                    </TouchableOpacity>
                    }
                    trailing={<TouchableOpacity
                    >
                        <Icon name="dots-horizontal-circle-outline"
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false} >

                    {/* The User's profile photo */}
                    <View style={{ paddingTop: 20 }}>
                        {/* <Image source={require('../../assets/image/User.png')}
                            style={{
                                resizeMode: 'stretch',
                                alignSelf: 'center',
                                height: height / 8,
                                width: width / 3.6
                            }}
                        /> */}
                        <ImageProfile userImageURI={user.profilePic} />
                    </View>

                    {/* The User's name and phone number */}
                    <View style={{ paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>{user.firstName + " " + user.lastName}</Text>
                        <Text style={[style.s14, { color: theme.txt, marginTop: 5 }]}>{user.phoneNum}</Text>
                    </View>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={[style.divider, { backgroundColor: theme.border }]} />
                    </View>

                    {/* Adding the Settings options using the array "s" and the component "Settings_option" */}
                    {settings_details.map((s) => (
                        <View style={{ paddingBottom: 20 }}>
                            <Settings_option theme navTo={s.navTo} t={s.t} i={s.i} />
                        </View>
                    ))}

                    {/* setting the logout button and popup logout manu ("Are you sure you want to log out?") */}
                    <View style={{ paddingTop: 15, marginBottom: 70 }}>
                        <TouchableOpacity onPress={() => this.RBSheet14.open()}>
                            <RBSheet ref={ref => {
                                this.RBSheet14 = ref;
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
                                    <Text style={[style.apptitle, { textAlign: 'center', color: '#F75555' }]}>התנתק</Text>
                                    <View style={[style.divider, { marginVertical: 10, backgroundColor: '#EEEEEE' }]}></View>

                                    <View style={{ paddingTop: 20 }}>
                                        <Text style={[style.b18, { color: theme.txt, textAlign: 'center', }]}>אם אתה בטוח שאתה רוצה להתנתק?</Text>
                                    </View>
                                    <View style={{ marginTop: 25, flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            onPress={() => this.RBSheet14.close()}
                                            style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: theme.btntxt }]}>ביטול</Text>
                                        </TouchableOpacity>
                                        <View style={{ margin: 5 }}></View>
                                        <TouchableOpacity
                                            onPress={() => { this.RBSheet14.close(), navigation.navigate('Login') }}
                                            style={[style.btn, { flex: 1 }]}>
                                            <Text style={[style.btntxt, { color: Colors.secondary }]}>כן, התנתק</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </RBSheet>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='logout' size={25} color='#F75555' />
                                <Text style={[style.txt, { color: '#F75555', marginLeft: 10 }]}>התנתק</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )//return
}//Settings