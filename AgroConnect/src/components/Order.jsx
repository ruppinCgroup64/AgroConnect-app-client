import { View, Text, Platform, SafeAreaView, ImageBackground, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import themeContext from '../theme/themeContex';
import RoundedImage from './RoundImage';
import { Colors } from '../theme/color'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Order({ img, name, dateTime, products }) {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <TouchableOpacity>
            <View style={{ width: width * 0.9 }}>
                <View style={{ width: width * 0.9, backgroundColor: theme.bg3, padding: 10, borderRadius: 15, marginBottom: 15 }}>
                    <TouchableOpacity zIndex={1}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Image on the left */}
                            <RoundedImage url={img} wid={width / 7.2} hei={height / 16} />

                            {/* Content */}
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                {/* Top row containing name */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[style.apptitle, { color: theme.txt, fontSize: 20, textAlign: 'left' }]}>
                                        {name}
                                    </Text>

                                    {/* dateTime on the right */}
                                    <Text style={[style.s10, { color: Colors.primary, fontSize: 15, textAlign: 'right' }]}>
                                        {dateTime}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 10 }}></View>
        </TouchableOpacity>
    );//return

}//Order