import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useFonts } from 'expo-font';
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Checkbox from 'expo-checkbox';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewAddress() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState(false);
    const [isChecked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <ImageBackground source={theme.s10} resizeMode='stretch' style={{ height: height, flex: 1, }} >
                <View style={{ flex: 1 }}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Add New Address'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        style={{ paddingHorizontal: 20, paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Address')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={28} />
                        </TouchableOpacity>}
                    />
                </View>
                <View style={{ flex: 1, backgroundColor: theme.bg, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                        <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center' }]}>Address Details</Text>
                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>
                        <Text style={[style.b18, { color: theme.txt, marginTop: 10 }]}>Name Address</Text>

                        <View style={[style.txtinput, { backgroundColor: theme.input, borderColor: theme.border, marginTop: 10 }]}>
                            <TextInput placeholder='Apartment'
                                selectionColor={Colors.primary}
                                placeholderTextColor={theme.txt}
                                style={[style.s14, { flex: 1, color: theme.txt, }]} />
                        </View>

                        <Text style={[style.b18, { color: theme.txt, marginTop: 15 }]}>Address Details</Text>
                        <View style={[style.txtinput, { backgroundColor: theme.input, marginTop: 10, borderColor: theme.border, flexDirection: 'row', alignItems: 'center' }]}>
                            <TextInput placeholder='2899 Summer Drive Taylor, PC 48180'
                                selectionColor={Colors.primary}
                                placeholderTextColor={theme.txt}
                                style={[style.s14, { flex: 1, color: theme.txt, }]} />
                            <Icon name="location" size={20} color={theme.txt} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? Colors.primary : Colors.disable}
                            />
                            <Text style={[style.s14, { color: theme.txt,marginLeft:5 }]}>Make this as the default address</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={[style.btn, { marginVertical: 20 }]}>
                            <Text style={[style.btntxt, {}]}>Add</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ImageBackground>
</KeyboardAvoidingView>
        </SafeAreaView>
    )
}