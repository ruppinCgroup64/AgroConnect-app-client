import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    ScrollView,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { Colors } from '../theme/color';
import style from '../theme/style';
import themeContext from '../theme/themeContex';
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { UsersContext } from "../Context/UserContext";
import RoundedImage from '../components/RoundImage';
import TenderHomeElement from '../components/TenderHomeElement';
import LeadTable from '../components/LeadTable'; // ודא שהייבוא נכון
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LeadTableFarmer from '../components/LeadTableFarmer';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function TenderFarmer({route}) {
    const { item } = route.params;

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [categoryIndex, setcategoryIndex] = useState(-1);
    const { farm } = useContext(UsersContext);
    const image = { uri: item.productPic };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ backgroundColor: theme.bg3, flex: 1 }}>
                <ImageBackground source={image} resizeMode='cover' style={{ height: height / 2.2, flex: 1 }} >
                    <AppBar
                        elevation={0}
                        style={{ paddingHorizontal: 20, backgroundColor: 'transparent', paddingTop: 15 }}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon
                                name="arrow-forward"
                                color={theme.txt}
                                size={30}
                                style={{
                                    padding: 10,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: 10,
                                }}
                            />
                        </TouchableOpacity>}
                    />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, backgroundColor: theme.bg }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>{item.packsAmount} ק"ג {item.productName}</Text>
                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 20, marginTop: 5 }]}>  / מארז</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>כמות מארזים למכירה: {item.offeredPacks}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>מועד סגירת מכרז: {item.closeDateHour}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>מועד חלוקה: {item.collectDateHour}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 15, marginTop: 5, marginBottom: 5 }]}>מועד סגירת חלוקה: {item.collectDateHourClose}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <RoundedImage url={item.farmPic} wid={width / 7.2} hei={height / 16} />
                        <Text style={[style.s18, { textAlign: 'right', color: theme.txt, justifyContent: 'center', marginTop: 5,marginLeft:10}]}>  {item.collectAddress}</Text>
                    </View>

                    {/* ----------------------------- */}
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star-half-sharp' size={30} color={Colors.primary} style={{ marginHorizontal: 10 }} />
                            <Text style={[style.m14, { color: theme.txt3, fontSize: 24 }]}>4</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='logo-whatsapp' size={30} color={Colors.primary} />
                        </View>
                    </View> */}
                         {/* ----------------------------- */}
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]} />
                    <Text style={[style.t1, { color: Colors.primary , textAlign: 'center' }]}>טבלת ההצעות</Text>
                    <LeadTableFarmer tenderId={item.id}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
