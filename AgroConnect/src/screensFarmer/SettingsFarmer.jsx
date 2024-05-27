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
import RoundedImage from '../components/RoundImage';
import DropDownPicker from 'react-native-dropdown-picker';
import MyTabs from '../navigator/BottomNavigator';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

// An Array containing every option's details
/* key → a unique for each option
   navTo → the navigation address of where the option leads
   t → the text that will display for the user for that option
   i → the icon name of the option, using the import Icons  */
const settings_details = [
    { navTo: 'EditProfile', t: 'עריכת פרטים אישיים', i: 'person-outline', key: 1 },
    { navTo: 'Farmer', t: 'העמוד שלי', i: 'id-card-outline', key: 2 },
    { navTo: 'About', t: 'אודות', i: 'alert-circle-outline', key: 3 }
];

export default function SettingsFarmer() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { consumer } = useContext(UsersContext);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    // states and an eddect to eneble navigation to the costumers's settings, when pressed
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("התחבר כ-");
    const [items, setItems] = useState([
        { label: "חקלאי", value: "חקלאי" },
        { label: "צרכן", value: "צרכן" }
    ]);
    const [userType, setUserType] = useState("התחבר כ-");
    useEffect(() => {
        if (value == "צרכן"){
            this.RBSheet14.close(); 
            navigation.navigate('MyTabs');
        }
    }, [value]);

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
                    <View style={{ paddingTop: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <RoundedImage url={consumer.profilePic} wid={width / 3.6} hei={height / 8} />
                    </View>


                    {/* The User's name and phone number */}
                    <View style={{ paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>{consumer.firstName + " " + consumer.lastName}</Text>
                        {/* <Text style={[style.s14, { color: theme.txt, marginTop: 5 }]}>{consumer.phoneNum}</Text> */}
                    </View>
                    <View style={{ paddingVertical: 20 }}>
                        <View style={[style.divider, { backgroundColor: theme.border }]} />
                    </View>

                    {/* Adding the first Settings option using the array "settings_details" and the component "Settings_option" */}
                    {<View style={{ paddingBottom: 20 }}>
                        <Settings_option theme navTo={settings_details[0].navTo} t={settings_details[0].t} i={settings_details[0].i} />
                    </View>}

                    {/* Adding the second Settings option using the array "settings_details" and the component "Settings_option" */}
                    {<View style={{ paddingBottom: 20 }}>
                        <Settings_option theme navTo={settings_details[1].navTo} t={settings_details[1].t} i={settings_details[1].i} />
                    </View>}

                    {/* Adding the third Settings option using the array "settings_details" and the component "Settings_option" */}
                    {<View style={{ paddingBottom: 20 }}>
                        <Settings_option theme navTo={settings_details[2].navTo} t={settings_details[2].t} i={settings_details[2].i} />
                    </View>}

                    {/* The "Connected As" drop down */}
                    <DropDownPicker
                        listMode="MODAL"
                        open={open}
                        value={value || userType}
                        items={items}
                        setOpen={setOpen}
                        setValue={(newValue) => {
                            setValue(newValue);
                            setUserType(newValue);
                        }}
                        setItems={setItems}
                        placeholder="התחבר כ-"
                        placeholderStyle={{
                            color: theme.txt,
                        }}
                        style={[
                            {
                                borderColor: theme.input,
                                borderWidth: 1,
                                backgroundColor: theme.input,
                                color: theme.txt,
                                flex: 1,
                                borderRadius: 15,
                                marginBottom: 20,
                            },
                            style.s14,
                        ]}
                        textStyle={[
                            style.s14,
                            {
                                textAlign: "left",
                                color: theme.txt,
                            },
                        ]}
                        dropDownContainerStyle={{
                            borderColor: theme.input,
                            backgroundColor: theme.input,
                            marginTop: 10,
                            zIndex: 1000,
                        }}
                    />

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