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
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PhoneInput from 'react-native-phone-number-input';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Profile() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('Select Date');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker();
    };

    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneInput = useRef(null);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg ,}]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main, { backgroundColor: theme.bg ,marginTop:10}]}>
                    <AppBar
                        color={theme.bg}
                        title='עריכת פרטים'
                        titleStyle={[style.apptitle,{ color: theme.txt,  }]}
                        // centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity
                            onPress={() => navigation.navigate('CreateAccount')}
                        >
                            <Icon name="arrow-left"
                                // style={{ backgroundColor: Colors.secondary, }}
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>
                        } />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        
                        <View style={{ paddingTop: 20 }}>
                            <TextInput style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt ,borderColor:theme.input}]}
                                placeholder='Andrew Ainsley'
                                placeholderTextColor='#9E9E9E'
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={{ paddingTop: 15 }}>
                            <TextInput style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt,borderColor:theme.input }]}
                                placeholder='Andrew'
                                placeholderTextColor='#9E9E9E'
                                selectionColor={Colors.primary}
                            />
                        </View>
                        <View style={{ paddingTop: 15, }}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderColor:theme.input
                            }]}>
                                <TextInput
                                    // placeholder='Full Name'
                                    // placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    value={selectDate}
                                    style={{ color: theme.txt }}

                                />
                                <TouchableOpacity onPress={showDatePicker}>
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}

                                    />
                                    <Icon name='calendar-month-outline' color='#9E9E9E' size={20} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ paddingTop: 15, }}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',borderColor:theme.input
                            }]}>
                                <TextInput
                                    placeholder='andrew_ainsley@yourdomain.com'
                                    placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    style={{ color: theme.txt }}
                                />
                                <TouchableOpacity>
                                    <Icon name='email-outline' color='#9E9E9E' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ paddingTop: 15,}}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',borderColor:theme.input
                            }]}>
                                <TextInput
                                    placeholder='United States'
                                    placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    style={{ color: theme.txt }}
                                />
                                <TouchableOpacity>
                                    <Icon name='chevron-down' color='#9E9E9E' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ paddingTop: 15 }}>
                            <PhoneInput
                                selectionColor={Colors.primary}
                                ref={phoneInput}
                                defaultValue={phoneNumber}
                                defaultCode="IN"
                                layout="first"
                                // withShadow
                                // autoFocus
                                codeTextStyle={{ color: theme.txt }}
                                textInputProps={{ placeholderTextColor: '#9E9E9E' }}
                                textInputStyle={{ color: theme.txt }}
                                containerStyle={{
                                    height: 50,
                                    width: '100%',
                                    borderColor:theme.input,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    backgroundColor: theme.input
                                }}
                                textContainerStyle={{
                                    paddingVertical: 0,
                                    borderRadius: 10,
                                    backgroundColor: theme.input
                                }}
                                onChangeFormattedText={text => {
                                    setPhoneNumber(text);
                                }}
                            />
                        </View>
                        <View style={{ paddingTop: 15, paddingBottom: 20 }}>
                            <View style={[style.txtinput, {
                                backgroundColor: theme.input,
                                color: theme.txt, flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',borderColor:theme.input
                            }]}>
                                <TextInput
                                    placeholder='Male'
                                    placeholderTextColor='#9E9E9E'
                                    selectionColor={Colors.primary}
                                    style={{ color: theme.txt }}
                                />
                                <TouchableOpacity>
                                    <Icon name='chevron-down' color='#9E9E9E' size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingVertical: 20 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Location')}
                                style={[style.btn]}>
                                <Text style={[style.btntxt]}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}