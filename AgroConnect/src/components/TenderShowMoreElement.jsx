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

export default function TenderShowMoreElement({ item ,nav, img, title, address, nav2, rank, timer }) {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

function goToPage(item){
    console.log('itemmm',item)
    //navigation.navigate('TenderFarmer', item:{item} )
}

    return (
         <TouchableOpacity>
            <View style={{ width: width*0.9}}>
                <View style={{ width: width*0.9, backgroundColor: theme.bg3, padding: 10, borderRadius: 15 }}>
                    <View style={{ alignItems: 'flex-end', zIndex: 2 }} onPress={() => liked}>
                        <Icon name='heart-outline' size={30} color={Colors.primary}></Icon>
                    </View>
                    <TouchableOpacity zIndex={1} style={{ marginTop: -30, alignItems: 'center'}} onPress={() => navigation.navigate(nav,{ item:item })}>
                        <SquareImage url={img}
                            wid={width / 2.25} hei={height / 5} />
                    </TouchableOpacity>
                </View>
                {/* <Text style={[style.apptitle, { color: theme.txt, marginTop: 10, textAlign: 'center' }]}>{title}</Text> */}
                <Text style={[style.s10, { color: Colors.primary, fontSize: 25, textAlign:'center',marginBottom:10 }]}>{title}</Text>
                <View style={[style.apptitle, { color: theme.txt, marginTop: -5, fontSize: 20, float: 'center' }]}>
                    <Text style={[style.apptitle, { color: theme.txt, marginTop: -5, fontSize: 20, textAlign: 'center' }]}>{address}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    {rank?<View style={{ flexDirection: 'row' }}>
                        <Icon name='star-half-sharp' size={20} color={Colors.primary}></Icon>
                        <Text style={[style.m16, { color: theme.txt3, marginHorizontal: 10, }]}>{rank}  |</Text>
                    </View>:null}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 2, marginRight: 20, borderRadius: 5, borderWidth: 1, borderColor: Colors.primary }}>
                            <Text style={[style.s10, { color: Colors.primary}]}>{timer}</Text>
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