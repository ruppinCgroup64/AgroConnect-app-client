import { View, Text, Platform, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Profilefill() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('');
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

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <KeyboardAvoidingView   behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>

                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        title='הרשמה'
                        titleStyle={[style.apptitle, { color: theme.txt, textAlign:'center'}]}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Icon name="arrow-back"
                                color={theme.txt} size={30}
                            />
                        </TouchableOpacity>}
                        trailing={<View style={{ width: 30, height: 30, opacity: 0 }} />}
                         />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image source={require('../../assets/image/User.png')}
                            style={{ height: height / 8, width: width / 3.2, resizeMode: 'stretch', alignSelf: 'center', marginTop: 15 }}></Image>

                        <View style={[style.txtinput, { borderColor: theme.input, backgroundColor: theme.input, marginTop: 20 }]}>
                            <TextInput placeholder='שם פרטי'
                                textAlign= 'right'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.s14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { borderColor: theme.input, backgroundColor: theme.input, marginTop: 20 }]}>
                            <TextInput placeholder='שם משפחה'
                                textAlign= 'right'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.s14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                        </View>

                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 20 }]}>
                            <TextInput
                                placeholder='תאריך לידה'
                                textAlign= 'right'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                value={selectDate}
                                style={[style.s14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                            <TouchableOpacity onPress={showDatePicker}>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <Icon name='calendar-outline' color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 20 }]}>
                            <TextInput placeholder='אימייל'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.s14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                            <TouchableOpacity>
                                <Icon name='mail-outline' color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.inputContainer, { borderColor: theme.input, borderWidth: 1, backgroundColor: theme.input, marginTop: 20 }]}>
                            <TextInput placeholder='מין'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={[style.s14, { paddingHorizontal: 10, color: theme.txt, flex: 1 }]}
                            />
                            <TouchableOpacity>
                                <Icon name='caret-down' color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 40, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                                style={style.btn}>
                                <Text style={[style.btntxt, { }]}>המשך</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}