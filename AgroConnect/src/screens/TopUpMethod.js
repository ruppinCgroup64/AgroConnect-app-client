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
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function TopUpMethod() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Top Up Wallet'
                    titleStyle={[style.apptitle, { color: theme.txt, }]} elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.navigate('Amount')}
                    >
                        <Icon name="arrow-left" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[style.s14, { color: theme.txt2, marginTop:20 }]}>Select the top up method you want to use</Text>
                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center',borderColor:theme.input }]}>
                            <Image source={require('../../assets/image/paypal.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Paypal</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center',borderColor:theme.input }]}>
                            <Image source={require('../../assets/image/Google.png')}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Google pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center' ,borderColor:theme.input}]}>
                            <Image source={theme.apple}
                                style={{ resizeMode: 'stretch', height: height / 32, width: width / 15 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>Apple Pay</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="third"
                                    status={checked === 'third' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('third')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>
                   
                    <View style={{ paddingTop: 20, }}>
                        <View style={[style.txtinput, { backgroundColor: theme.input, color: theme.txt, flexDirection: 'row', alignItems: 'center',borderColor:theme.input }]}>
                            <Image source={theme.a9}
                                style={{ resizeMode: 'stretch', height: height / 33, width: width / 10 }}
                            />
                            <Text style={[style.b16, { color: theme.txt, fontFamily: 'Urbanist-Bold', marginHorizontal: 10 }]}>•••• •••• •••• •••• 4679</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <RadioButton
                                    value="fourth"
                                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('fourth')}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.primary}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <TouchableOpacity style={[style.btn, { backgroundColor: theme.skip }]}>
                            <Text style={[style.btntxt, { color: Colors.primary }]}>Add New Card</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingTop: 150, paddingBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Otp3')}
                            style={[style.btn]}>
                            <Text style={[style.btntxt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}