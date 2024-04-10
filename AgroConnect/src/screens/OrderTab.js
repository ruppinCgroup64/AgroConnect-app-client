import { View, Text, Platform, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar, Avatar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet';

const Tab = createMaterialTopTabNavigator();

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tabs = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: theme.bg },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarShowLabel: true,
                tabBarItemStyle: { marginHorizontal: -10 },
                tabBarIndicatorStyle: { backgroundColor: Colors.primary },
                swipeEnabled: false,
                tabBarPressOpacity: 0.5,
                tabBarPressColor: theme.bg
            }}>
            <Tab.Screen name="Active" component={Active}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.primary : Colors.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center', fontSize: 16 }}>Active</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Completed" component={Completed}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.primary : Colors.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center', fontSize: 16 }}>Completed</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

const Active = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (

        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height / 1.25 : height /1.22 }} style={{ marginTop: 10 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 10 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i1.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Prayer Plant</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 1</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>In Delivery</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$29</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderTrack')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 6 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.7 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Rubber Fig Plant</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 3</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>In Delivery</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$99</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderTrack')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 6 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i2.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>ZZ Plant</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 2</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>In Delivery</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$50</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderTrack')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 6 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Airtight Cactus</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 2</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>In Delivery</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$72</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderTrack')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 6 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

const Completed = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: Platform.OS === 'ios' ? height / 1.25 : height / 1.22 }} style={{ marginTop: 10 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center',  borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 10 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i11.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Yucca Plant</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 2</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>Completed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$70</Text>
                            <TouchableOpacity onPress={() => this.RBSheet2.open()}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 5 }]}>

                                <RBSheet ref={ref => {
                                    this.RBSheet2 = ref;
                                }}
                                    height={500}
                                    openDuration={100}
                                    customStyles={{
                                        container: {
                                            borderTopRightRadius: 20,
                                            borderTopLeftRadius: 20,
                                            backgroundColor: theme.bg2
                                        }
                                    }}>
                                    <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>Leave a Review</Text>
                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 10 }]}></View>

                                        <View style={{ padding: 5, marginTop: 10 }}>
                                            <View style={[style.shadow, { flexDirection: 'row', alignItems: 'center', shadowColor: Colors.active, backgroundColor: theme.bg, borderRadius: 20, borderRadius: 20, padding: 10, }]}>
                                                <View style={{ height: height / 10, width: width / 4.3, backgroundColor: theme.bg3, borderRadius: 15 }} >
                                                    <Image source={require('../../assets/image/i11.png')} resizeMode='stretch' style={{ height: height / 8, width: width / 3.7,flex:1 }} />
                                                </View>
                                                <View style={{ flex: 1, marginLeft: 10 }}>
                                                    <Text style={[style.b18, { color: theme.txt, }]}>Yucca Plant</Text>
                                                    <Text style={[style.m12, { color: theme.txt3,  marginTop: 4 }]}>Qty = 2</Text>
                                                    <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                                                        <Text style={[style.s10, { color: Colors.primary }]}>Completed</Text>
                                                    </View>
                                                    <Text style={[style.b18, { color: Colors.primary ,marginTop:5}]}>$70</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 10 }]}></View>

                                        <Text style={[style.apptitle, { textAlign: 'center', color: theme.txt }]}>How is your order?</Text>
                                        <Text style={[style.m16, { textAlign: 'center', color: theme.txt3, marginTop: 5 }]}>Please give your rating & also your review...</Text>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 15 }}>
                                            <Icon name="star" color={Colors.primary} size={25} />
                                            <Icon name="star" color={Colors.primary} size={25} />
                                            <Icon name="star" color={Colors.primary} size={25} />
                                            <Icon name="star" color={Colors.primary} size={25} />
                                            <Icon name="star-outline" color={theme.txt} size={25} />
                                        </View>

                                        <View style={[style.inputContainer, { borderColor: isFocused === 'Amazing plant & fast delivery! 🔥🔥🔥' ? Colors.primary : theme.input, backgroundColor: isFocused === 'Amazing plant & fast delivery! 🔥🔥🔥' ? theme.btn : theme.input }]}>
                                            <TextInput placeholder='Amazing plant & fast delivery! 🔥🔥🔥'
                                                selectionColor={Colors.primary}
                                                onFocus={() => setIsFocused('Amazing plant & fast delivery! 🔥🔥🔥')}
                                                onBlur={() => setIsFocused(false)}
                                                placeholderTextColor={theme.txt}
                                                style={[style.r14, { color: theme.txt, flex: 1 }]}
                                            />
                                            <TouchableOpacity  >
                                                <Icon name='image' color={isFocused === 'Amazing plant & fast delivery! 🔥🔥🔥' ? Colors.primary : Colors.disable} size={20} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={[style.divider, { backgroundColor: theme.border, marginTop: 15 }]}></View>
                                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                            <TouchableOpacity onPress={() => this.RBSheet2.close()}
                                                style={[style.btn, { flex: 1, backgroundColor: theme.btn }]}>
                                                <Text style={[style.btntxt, { color: theme.btntxt, }]}>Cancel</Text>
                                            </TouchableOpacity>
                                            <View style={{ margin: 5 }}></View>
                                            <TouchableOpacity onPress={() => this.RBSheet2.close()}
                                                style={[style.btn, { flex: 1 }]}>
                                                <Text style={[style.btntxt, {}]}>Submit</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </RBSheet>

                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center',  borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i12.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.7 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Thimble Cactus</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 3</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>Completed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$75</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Ticket')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 5 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i2.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Pink Orchid Flower</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 1</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>Completed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$49</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Ticket')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 5 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.bg2, borderRadius: 20, backgroundColor: theme.input, borderRadius: 20, padding: 10, marginTop: 20 }}>
                    <View style={{ height: height / 8, width: width / 3.7, backgroundColor: theme.bg3, borderRadius: 15 }} >
                        <Image source={require('../../assets/image/i3.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 4 }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <Text style={[style.b18, { color: theme.txt, }]}>Sansevieria Trifasciata</Text>
                        <Text style={[style.m12, { color: theme.txt3, marginHorizontal: 10, marginTop: 4 }]}>Qty = 4</Text>
                        <View style={{ backgroundColor: Colors.skip, borderRadius: 8, paddingVertical: 6, width: width / 5, alignItems: 'center', marginTop: 5 }}>
                            <Text style={[style.s10, { color: Colors.primary }]}>Completed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.b18, { color: Colors.primary }]}>$128</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Ticket')}
                                style={[style.btn, { backgroundColor: Colors.primary, paddingVertical: 5 }]}>
                                <Text style={[style.btntxt, { fontSize: 14, marginHorizontal: 10 }]}>Leave a Review</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


export default function OrderTab() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='My Order'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<Image source={require('../../assets/image/Logo.png')}
                        resizeMode='stretch'
                        style={{ width: width / 8.5, height: height / 20 }}></Image>}
                    trailing={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Icon name="search" color={theme.txt} size={25} style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="ellipsis-horizontal-circle" color={theme.txt} size={30} />
                        </TouchableOpacity>
                    </View>


                    } />

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}