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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [probLogin, setProbLogin] = useState("");

  const { consumer, setConsumer } = useContext(UsersContext);

  const handleSubmit = async () => {
    if (validateForm()) {
      const user = {
        id: 0,
        email,
        firstName: "",
        lastName: "",
        password,
        gender: "",
        dateOfBirth: "",
        phoneNum: "",
        address: "",
        registrationDate: "",
        isAdmin: true,
        profilePic: "",
        isFarmer: true,
        longitude: "",
        latitude: "",
      };
      let ans=await login(user)
      if (ans==true) {
        navigation.navigate("MyTabs");
      } 
      else {
        setProbLogin("הפרטים אינם תקינים")
      }
      setErrors({});
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

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg }]}>
          {/* <AppBar
            color={theme.bg}
            elevation={0}
            leading={<TouchableOpacity onPress={() => navigation.navigate('Letsin')}>
              <Icon name="arrow-back"  color={theme.txt} size={30}/>
            </TouchableOpacity>
            } /> */}
          <Image
            source={{
              uri: "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/fruits_bgr.png",
            }}
            resizeMode="stretch"
            style={{
              height: height / 3.5,
              width: width* (4/3.5),
              alignSelf: "center",
              marginTop: -height/15,
            }}
          ></Image>
          <Image
            source={theme.a}
            resizeMode="stretch"
            style={{
              height: height / 9,
              width: width / 1.8,
              alignSelf: "center",
              marginTop: -height/25,
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
                  isFocused === "email" ? Colors.primary : theme.input,
                backgroundColor:
                  isFocused === "email" ? theme.btn : theme.input,
              },
            ]}
          >
            <Icon
              name="mail"
              size={25}
              color={isFocused === "email" ? Colors.primary : Colors.disable}
            ></Icon>
            <TextInput
              placeholder="אימייל"
              selectionColor={Colors.primary}
              onFocus={() => setIsFocused("email")}
              onBlur={() => setIsFocused(false)}
              placeholderTextColor={Colors.disable}
              
              style={[
                style.r14,
                { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                { textAlign: email ? "left" : "right" },
              ]}
              onChangeText={setEmail}
              value={email}
            />
          </View>
          {errors.email ? (
            <Text style={style.errorText}>{errors.email}</Text>
          ) : null}
          <View
            style={[
              style.inputContainer,
              {
                borderColor:
                  isFocused === "password" ? Colors.primary : theme.input,
                backgroundColor:
                  isFocused === "password" ? theme.btn : theme.input,
              },
            ]}
          >
            <Icon
              name="lock-closed"
              size={25}
              color={isFocused === "password" ? Colors.primary : Colors.disable}
            ></Icon>
            <TextInput
              placeholder="סיסמא"
              secureTextEntry={isPasswordVisible}
              onFocus={() => setIsFocused("password")}
              onBlur={() => setIsFocused(false)}
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={[
                style.r14,
                { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                { textAlign: password ? "left" : "right" },
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
                  isFocused === "password" ? Colors.primary : Colors.disable
                }
                size={20}
              />
            </TouchableOpacity>
          </View>
          {errors.password ? (
            <Text style={style.errorText}>{errors.password}</Text>
          ) : null}
          
          <View style={{ marginVertical: 15 }}>
              <Text style={style.errorText}>{probLogin}</Text>
          </View>

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
