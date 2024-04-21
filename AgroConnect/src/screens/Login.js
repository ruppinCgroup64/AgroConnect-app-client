import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  //login data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  //submit
  const handleSubmit = () => {
    //if (validateForm()) 
    {
      console.log("submitted"); //API place
      // loginPOST(email);//API request
      setEmail("");
      setPassword("");
      setErrors({});
      navigation.navigate("MyTabs");
    }
  };
  //errors
  const validateForm = () => {
    let errors = {};
    if (!email) errors.email = "שדה חובה";
    if (!password) errors.password = "שדה חובה";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(()=>{
    setErrors({})
     },[])
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //     setVisible(true);
  //     const timer = setTimeout(() => {
  //         setVisible(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  // });

  //fetch to login with POST 
  // const loginPOST=(email)=>{
  //   fetch(apiUrl, {
  //     method: 'POST',
  //     body: JSON.stringify(email),
  //     headers: new Headers({
  //       'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
  //       'Accept': 'application/json; charset=UTF-8',
  //     })
  //   })
  //     .then(res => {
  //       console.log('res=', res);
  //       return res.json()
  //     })
  //     .then(
  //       (result) => {
  //         console.log("fetch POST= ", result);
  //         console.log(result.grade);
  //       },
  //       (error) => {
  //         console.log("err post=", error);
  //       });
  // }

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          {/* <AppBar
            color={theme.bg}
            elevation={0}
            leading={<TouchableOpacity onPress={() => navigation.navigate('Letsin')}>
              <Icon name="arrow-back"  color={theme.txt} size={30}/>
            </TouchableOpacity>
            } /> */}
          <Image
            source={theme.fruits_bgr}
            resizeMode="stretch"
            style={{ height: height / 5, width: width, alignSelf: "center" }}
          ></Image>
            <Image
              source={theme.a}
              resizeMode="stretch"
              style={{
                height: height / 9,
                width: width / 1.8,
                alignSelf: "center",
              }}
            ></Image>

            <View style={{ marginVertical: 20 }}>
              <Text
                style={[
                  style.subtitle,
                  { color: theme.txt, textAlign: "center" },
                ]}
              >
                ברוכים השבים!
              </Text>
              {/* <Text style={[style.b1, { color: theme.txt,textAlign:'center'}]}>התחברו לחשבון שלכם</Text> */}
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 10,
                  borderColor:
                    isFocused === "Email" ? Colors.primary : theme.input,
                  backgroundColor:
                    isFocused === "Email" ? theme.btn : theme.input,
                },
              ]}
            >
              <Icon
                name="mail"
                size={25}
                color={isFocused === "Email" ? Colors.primary : Colors.disable}
              ></Icon>
              <TextInput
                placeholder="אימייל"
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused("Email")}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r14,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                  { textAlign: email ? 'left' : 'right' }
                ]}
                onChangeText={setEmail}
                value={email}
              />
            </View>
            {errors.email? (
              <Text style={style.errorText}>{errors.email}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === "Password" ? Colors.primary : theme.input,
                  backgroundColor:
                    isFocused === "Password" ? theme.btn : theme.input,
                },
              ]}
            >
              <Icon
                name="lock-closed"
                size={25}
                color={
                  isFocused === "Password" ? Colors.primary : Colors.disable
                }
              ></Icon>
              <TextInput
                placeholder="סיסמא"
                secureTextEntry={isPasswordVisible}
                onFocus={() => setIsFocused("Password")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r14,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                  { textAlign: password ? 'left' : 'right' }
                ]}
                onChangeText={setPassword}
                value={password}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  color={
                    isFocused === "Password" ? Colors.primary : Colors.disable
                  }
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {errors.password ? (
              <Text style={style.errorText}>{errors.password}</Text>
            ) : null}
            {/* <View style={{ flexDirection: 'row', marginVertical: 20, paddingLeft: 10, alignItems: 'center', justifyContent: 'center' }}>

               <Checkbox
                  // style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? Colors.primary : Colors.disable}
                />
              <View>
                <Text style={[style.s14, { lineHeight: 14, marginLeft: 5, color: theme.txt }]}>Remember me</Text>
              </View>

            </View> */}

            <View style={{ marginVertical: 30 }}>
              <TouchableOpacity onPress={handleSubmit} style={style.btn}>
                <Text style={style.btntxt}>התחבר</Text>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
              <View style={{ marginTop: 20, alignItems: 'center' }}>
                <Text style={[style.s16, { color: Colors.primary }]}>Forgot the password?</Text>
              </View>
            </TouchableOpacity> */}

            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 50 }}>
              <View style={[style.divider, { flex: 1, backgroundColor: theme.border }]}></View>
              <Text style={[style.s18, { color: theme.txt2, marginHorizontal: 10, }]}>or continue with</Text>
              <View style={[style.divider, { flex: 1, backgroundColor: theme.border }]}></View>
            </View> */}

            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={[style.btnoutline, { borderColor: theme.border, backgroundColor: theme.input }]}>
                <Image source={require('../../assets/image/Fb.png')}
                  resizeMode='stretch'
                  style={{ height: height / 25, width: width / 11 }}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={[style.btnoutline, { borderColor: theme.border, backgroundColor: theme.input }]}>
                <Image source={require('../../assets/image/Google.png')}
                  resizeMode='stretch'
                  style={{ height: height / 25, width: width / 11 }}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={[style.btnoutline, { borderColor: theme.border, backgroundColor: theme.input }]}>
                <Image source={theme.apple}
                  resizeMode='stretch'
                  style={{ height: height / 25, width: width / 11 }}></Image>
              </TouchableOpacity>
            </View> */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 20,
                marginBottom: 10,
              }}
            >
                <Text style={[style.r14, { color: theme.txt3 }]}>
                אין לך חשבון? 
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profilefill")}
                style={{ flexDirection: 'row', alignItems: 'center' }} 
              >
                <Text style={[style.s14, { color: Colors.primary }]}>
                  {" "}
                הירשם עכשיו
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
