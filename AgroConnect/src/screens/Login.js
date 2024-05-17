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
import { create } from "../api";
import { UsersContext } from "../Context/UserContext";
import { UsersContext } from "../Context/UserContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useContext(themeContext);
  const { login } = useContext(UsersContext);
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  //login data
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { consumer, setConsumer } = useContext(UsersContext);
  //submit
  const handleSubmit = () => {
    //if (validateForm()) 
    {
      const c ={
        id: 0,
        email: email,
        firstName: "string",
        lastName: "string",
        password: password,
        gender: "string",
        dateOfBirth: "string",
        phoneNum: "string",
        address: "string",
        registrationDate: "string",
        isAdmin: true,
        profilePic: "string",
        isFarmer: true,
        longitude: "string",
        latitude: "string"
      };
      setConsumer(c);
      login(c);
  const handleSubmit = async  () => {
    if (validateForm()) {
      console.log("submitted"); //API place

      // loginPOST(email);//API request
      //setEmail("");
      //setPassword("");

      const user = {
        FirstName: "",
        LastName: "",
        DateOfBirth: "",
        Gender: "",
        Email,
        PhoneNum: "",
        Address: "",
        Latitude: "",
        Longitude: "",
        Password,
        ProfilePic: "",
        IsFarmer: false,
        RegistrationDate:"",
        IsAdmin: false
      };
      //const status = await login(user);
      //console.log(status);
      setErrors({});
      navigation.navigate("MyTabs");
    }
  };
  async function login(user) {
    let res = await create("api/Consumers/Login", user);
    if (res)
      setConsumer(res);
    else alert("something went wrong");
  }

  //errors
  const validateForm = () => {
    let errors = {};
    if (!Email) errors.Email = "שדה חובה";
    if (!Password) errors.Password = "שדה חובה";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
              ברוכים הבאים!
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
                { textAlign: Email ? "left" : "right" },
              ]}
              onChangeText={setEmail}
              value={Email}
            />
          </View>
          {errors.Email ? (
            <Text style={style.errorText}>{errors.Email}</Text>
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
              color={isFocused === "Password" ? Colors.primary : Colors.disable}
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
                { textAlign: Password ? "left" : "right" },
              ]}
              onChangeText={setPassword}
              value={Password}
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
          {errors.Password ? (
            <Text style={style.errorText}>{errors.Password}</Text>
          ) : null}

          <View style={{ marginVertical: 30 }}>
            <TouchableOpacity onPress={handleSubmit} style={style.btn}>
              <Text style={style.btntxt}>התחבר</Text>
            </TouchableOpacity>
          </View>

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
              style={{ flexDirection: "row", alignItems: "center" }}
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
