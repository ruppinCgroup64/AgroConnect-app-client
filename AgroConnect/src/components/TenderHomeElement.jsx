import { View, Text, Platform, SafeAreaView, ImageBackground, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import style from '../theme/style'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import themeContext from '../theme/themeContex';
import SquareImage from './SquareImage';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TenderHomeElement({ key, nav, img, title, address, nav2, rank, timer }) {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    console.log("this:" + title);
    return (
        <TouchableOpacity>
            <View style={{ width: width / 2 }}>
                <View style={{ width: width / 2, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                    <View style={{ alignItems: 'flex-end', zIndex: 2 }} onPress={() => liked}>
                        <Icon name='heart-outline' size={30} color={Colors.primary}></Icon>
                    </View>
                    <TouchableOpacity zIndex={1} style={{ marginTop: -30 }} onPress={() => navigation.navigate(nav)}>
                        <SquareImage url={img}
                            wid={width / 2.25} hei={height / 5} />
                    </TouchableOpacity>
                </View>
                <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, }]}>{title}</Text>
                <Text style={[style.apptitle, { color: theme.txt, marginTop: -5, fontSize: 20 }]}>{address}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>{rank}  |</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 2, marginRight: 20, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                            <Text style={[style.s10, { color: Colors.primary, }]}>{timer}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 10 }}></View>
        </TouchableOpacity >
    );//return

    function liked() {
        console.log("like");
    }//liked

}//HomeElement