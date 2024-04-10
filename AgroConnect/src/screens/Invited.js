import { View, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions, } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import style from '../theme/style'
import themeContext from '../theme/themeContex'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'
import { SafeAreaView } from 'react-native'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Invited() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [T1, setT1] = useState(false)
    const [T2, setT2] = useState(false)
    const [T3, setT3] = useState(false)
    const [T4, setT4] = useState(false)
    const [T5, setT5] = useState(false)
    const [T6, setT6] = useState(false)
    const [T7, setT7] = useState(false)
    const [T8, setT8] = useState(false)
    const [T9, setT9] = useState(false)
    const [T10, setT10] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:10}]}>
                <AppBar
                    color={theme.bg}
                    title='Invite Friends'
                    titleStyle={[style.subtitle, { color: theme.txt, }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icons name="arrow-left" color={theme.txt} size={25} />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{  flexDirection: 'row', alignItems: 'center',marginTop:20 }}>
                        <Avatar.Image source={require('../../assets/image/d1.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Tynisha Obey</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-300-555-0135</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT1(!T1)}
                                style={T1 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T1 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d2.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Florencio Dorrance</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-202-555-0136</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT2(!T2)}
                                style={T2 ? [style.follow,{backgroundColor:Colors.primary}]: [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]}>
                                {T2 ?
                                    <Text style={[style.b14, { color:theme.bg}]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d3.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Chantal Shelburne</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-300-555-0119</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT3(!T3)}
                                style={T3 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T3 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d4.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Maryland Winkles</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-300-555-0161</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setT4(!T4)}
                                style={T4 ? [style.follow,{backgroundColor:Colors.primary}]: [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]}>
                                {T4 ?
                                    <Text style={[style.b14, { color:theme.bg}]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d5.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Rodolfo Goode</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-300-555-0136</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT5(!T5)}
                                style={T5 ? [style.follow,{backgroundColor:Colors.primary}]: [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]}>
                                {T5 ?
                                    <Text style={[style.b14, { color:theme.bg}]}>Invite</Text> :
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d6.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Benny Spanbauer</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-202-555-0167</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT6(!T6)}
                                style={T6 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T6 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d9.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Tyra Dhillon</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-202-555-0119</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT7(!T7)}
                                style={T7 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T7 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d7.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Jamel Eusebio</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-202-555-0171</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT8(!T8)}
                                style={T8 ? [style.follow,{backgroundColor:Colors.primary}]: [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]}>
                                {T8 ?
                                    <Text style={[style.b14, { color:theme.bg}]}>Invite</Text> :
                                    <Text style={[style.b14, { color:Colors.primary}]}>Invited</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d8.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Pedro Huard</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-300-555-0171</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT9(!T9)}
                                style={T9 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T9 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../assets/image/d10.png')} style={{ backgroundColor: theme.bg }} size={60} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.b18, { color: theme.txt, }]}>Clinton Mcclure</Text>
                            <Text style={[style.m14, { color: theme.txt2, marginTop: 5 }]}>+1-202-555-0167</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setT10(!T10)}
                                style={T10 ? [style.following,{borderColor:Colors.primary,borderWidth:2,backgroundColor:theme.bg}]: [style.follow,{backgroundColor:Colors.primary}]}>
                                {T10 ?
                                    <Text style={[style.b14, { color: Colors.primary }]}>Invited</Text> :
                                    <Text style={[style.b14, { color: theme.bg }]}>Invite</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}