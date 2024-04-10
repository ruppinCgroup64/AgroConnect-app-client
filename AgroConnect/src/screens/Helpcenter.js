import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
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
                tabBarPressColor: theme.bg,

            }}>
            <Tab.Screen name="FAQ" component={FAQ}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.primary : Colors.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center', fontSize: 16 }}>FAQ</Text>
                    ),
                    headerShown: false,
                }} />
            <Tab.Screen name="Contact us" component={Contactus}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <Text style={{ color: focused ? Colors.primary : Colors.disable, fontFamily: 'Urbanist-SemiBold', textAlign: 'center', fontSize: 16 }}>Contact us</Text>
                    ),
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}

const FAQ = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const categories = ['General', 'Account', 'Service', 'Payment'];

    const [categoryIndex, setcategoryIndex] = useState(0)

    const Categorylist = () => {
        return (<View style={style.categorycontainer}>
            {categories.map((item, index) => (
                <TouchableOpacity key={index}
                    activeOpacity={0.8}
                    onPress={() => setcategoryIndex(index)}>
                    <Text
                        key={index}
                        style={[
                            style.categoryText, { color: Colors.primary ,backgroundColor:theme.bg},
                            categoryIndex == index && [style.categoryTextSelected,{}]]}>
                        {item}
                    </Text>
                </TouchableOpacity>

            ))}
        </View>
        );
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={{ marginTop: 10, }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Categorylist />
                </ScrollView>
            </View>
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} >
                <View style={[style.inputContainer, { backgroundColor: theme.input, borderColor: theme.border }]}>
                    <Icon name="search" size={20} color={Colors.disable} />
                    <TextInput placeholder='Search...'
                        selectionColor={Colors.primary}
                        placeholderTextColor={Colors.disable}
                        style={{ flex: 1, color: theme.txt, fontFamily: 'Urbanist-Regular' }} />
                    <Image source={require('../../assets/image/Filter.png')}
                        style={{ width: width / 19, height: height / 35, alignSelf: 'center' }}></Image>
                </View>

                <View style={[{ backgroundColor: theme.input, padding: 20, borderRadius: 20, marginTop: 20 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={[style.b18, { color: theme.txt }]}>What is Potea?</Text>
                        <Icon name='caret-down' size={20} color={Colors.primary}></Icon>
                    </View>
                    <View style={[style.divider, { backgroundColor: theme.border, marginVertical: 15 }]}></View>
                    <Text style={[style.r14, { color: theme.txt }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[style.b18, { color: theme.txt, flex: 1 }]}>How to buy plant?</Text>
                        <TouchableOpacity>
                            <Icon name='caret-down' size={20} color={Colors.primary}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[style.b18, { color: theme.txt, flex: 1 }]}>How do I cancel an orders?</Text>
                        <TouchableOpacity>
                            <Icon name='caret-down' size={20} color={Colors.primary}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[style.b18, { color: theme.txt, flex: 1 }]}>Is Potea free to use?</Text>
                        <TouchableOpacity>
                            <Icon name='caret-down' size={20} color={Colors.primary}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ padding: 5, marginTop: 10,marginBottom:20 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[style.b18, { color: theme.txt, flex: 1 }]}>How to add promo when checkout?</Text>
                        <TouchableOpacity>
                            <Icon name='caret-down' size={20} color={Colors.primary}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Contactus = () => {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, }]}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            onPress={() => navigation.navigate('CustomerService')}>
                            <Icon name='headset-sharp' size={27} color={Colors.primary}></Icon>
                            <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>Customer Service</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Icon name='logo-whatsapp' size={27} color={Colors.primary}></Icon>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>WhatsApp</Text>
                    </View>
                </View>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Icon name='globe-outline' size={27} color={Colors.primary}></Icon>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>Website</Text>
                    </View>
                </View>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Icons name='facebook' size={27} color={Colors.primary}></Icons>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>Facebook</Text>
                    </View>
                </View>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Icon name='logo-twitter' size={27} color={Colors.primary}></Icon>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>Twitter</Text>
                    </View>
                </View>
                <View style={{ padding: 5, marginTop: 10 }}>
                    <View style={[{ backgroundColor: theme.input, padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Icon name='logo-instagram' size={27} color={Colors.primary}></Icon>
                        <Text style={[style.b18, { color: theme.txt, flex: 1, marginLeft: 15 }]}>Instagram</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default function Helpcenter() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Help Center'
                    titleStyle={[style.apptitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name="arrow-back"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>}
                    trailing={<TouchableOpacity>
                        <Icon name="ellipsis-horizontal-circle"
                            // style={{backgroundColor:Colors.secondary,}}  
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>

                    } />

                <Tabs></Tabs>

            </View>
        </SafeAreaView>
    )
}