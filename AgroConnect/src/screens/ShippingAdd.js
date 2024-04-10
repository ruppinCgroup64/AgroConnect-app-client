import { View, Text, Platform, SafeAreaView, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, RadioButton } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ShippingAdd() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Shipping Address'
                        titleStyle={[style.apptitle, { color: theme.txt, }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                            <Icon name="arrow-back" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#01B76310', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#01B763', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='location' size={18} color={Colors.secondary}></Icon>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.b18, { color: theme.txt }]}>Home</Text>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: theme.btn, borderRadius: 5, marginLeft: 10 }}>
                                            <Text style={[style.s10, { color: theme.btntxt }]}>Default</Text>
                                        </View>
                                    </View>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>61480 Sunbrook Park, PC 5679</Text>
                                </View>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#01B76310', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#01B763', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='location' size={18} color={Colors.secondary}></Icon>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Office</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>6993 Meadow Valley Terra, PC 3637</Text>
                                </View>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor:Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#01B76310', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#01B763', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='location' size={18} color={Colors.secondary}></Icon>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Apartment</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>21833 Clyde Gallagher, PC 4662</Text>
                                </View>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <View style={{ padding: 5, marginTop: 10 }}>
                            <View style={[style.shadow, { backgroundColor: theme.bg2, shadowColor: Colors.active, padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }]}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#01B76310', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#01B763', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='location' size={18} color={Colors.secondary}></Icon>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10, flex: 1, }}>
                                    <Text style={[style.b18, { color: theme.txt }]}>Parent's House</Text>
                                    <Text style={[style.m14, { color: theme.txt3 }]}>5259 Blue Bill Park, PC 4627</Text>
                                </View>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[style.btn, { backgroundColor: theme.btn, marginVertical: 20 }]}>
                            <Text style={[style.btntxt, { color: theme.btntxt, }]}>Add New Address</Text>
                        </TouchableOpacity>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}
                        style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt, {}]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}