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
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Farmer() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const { products } = useContext(ProductContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const height = Dimensions.get('screen').height
    const width = Dimensions.get('screen').width

    //Products
    const Categorylist = () => {
        return (<View style={[style.categorycontainer, { marginBottom: 10 }]}>
            {products.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8}>
                    <View key={index}
                        style={[[style.categoryText, { flexDirection: 'row', color: Colors.primary, backgroundColor: theme.bg }], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                        <RoundedImage url={item.url} wid={width / 10.8} hei={height / 24} />
                        <Text
                            key={index}
                            style={[[style.categoryText, { color: Colors.primary, backgroundColor: theme.bg ,borderWidth: 0}], categoryIndex == index && [style.categoryTextSelected, {}]]}>
                            {item.name}
                        </Text>

                    </View>
                </TouchableOpacity>
            ))}
        </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
                <ImageBackground source={require('../../assets/image/Hameshek.jpg')} resizeMode='stretch' style={{ height: height / 2.2, flex: 1, }} >
                    <AppBar
                        elevation={0}
                        style={{ paddingHorizontal: 20, backgroundColor: 'transparent', paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="arrow-forward" color={theme.txt} size={30} />
                        </TouchableOpacity>
                        }
                    />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>המשק</Text>
                        <Icon name='pencil-outline' size={25} color={Colors.primary}></Icon>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginBottom: 5 }]}>בית יצחק, הנשרים 8</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10, }}></Icon>
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>4.9</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary}></Icon>
                            <Icon name='logo-instagram' size={30} color={Colors.primary} style={{ marginHorizontal: 10, }}></Icon>
                            <Icon name='logo-facebook' size={30} color={Colors.primary}></Icon>
                        </View>
                    </View>

                    {/* Products */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, marginRight: 10 }]}>מוצרים</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true} >
                            <Categorylist />
                        </ScrollView>
                    </View>

                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    {/* Add "תמצאו אותי ב.." here */}
                </ScrollView>


            </View>
        </SafeAreaView>
    )
}