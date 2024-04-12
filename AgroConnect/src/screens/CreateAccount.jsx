import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView, 
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function CreateAccount() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]} >
          <AppBar
            color={theme.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Letsin")}>
                <Icon name="arrow-back" color={theme.txt} size={30} />
              </TouchableOpacity>
            }
          />

          <ScrollView showsVerticalScrollIndicator={false}>

            <Image source={theme.a} resizeMode='stretch' style={{ height: height / 14, width: width / 3, alignSelf: 'center' }}></Image>

            <View style={{ marginVertical: 20 }}>
              <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center' }]}>
                Create your Account
              </Text>
            </View>

            <View
              style={[
                style.inputContainer,
                {
                  marginTop: 40,
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
                placeholder="Email"
                selectionColor={Colors.primary}
                onFocus={() => setIsFocused("Email")}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r14,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                ]}
              />
            </View>

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
                placeholder="Password"
                secureTextEntry={isPasswordVisible}
                onFocus={() => setIsFocused("Password")}
                onBlur={() => setIsFocused(false)}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.r14,
                  { paddingHorizontal: 10, color: theme.txt, flex: 1 },
                ]}
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

            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                paddingLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Checkbox
                // style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? Colors.primary : undefined}
              />
              <View>
                <Text
                  style={[
                    style.s14,
                    { lineHeight: 14, marginLeft: 5, color: theme.txt },
                  ]}
                >
                  Remember me
                </Text>
              </View>
            </View>

            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profilefill")}
                style={style.btn}
              >
                <Text style={style.btntxt}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginVertical: 50,
              }}
            >
              <View
                style={[
                  style.divider,
                  { flex: 1, backgroundColor: theme.border },
                ]}
              ></View>
              <Text
                style={[style.s18, { color: theme.txt2, marginHorizontal: 10 }]}
              >
                or continue with
              </Text>
              <View
                style={[
                  style.divider,
                  { flex: 1, backgroundColor: theme.border },
                ]}
              ></View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                style={[
                  style.btnoutline,
                  { borderColor: theme.border, backgroundColor: theme.input },
                ]}
              >
                <Image
                  source={require("../../assets/image/Fb.png")}
                  resizeMode="stretch"
                  style={{ height: height / 25, width: width / 11 }}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.btnoutline,
                  { borderColor: theme.border, backgroundColor: theme.input },
                ]}
              >
                <Image
                  source={require("../../assets/image/Google.png")}
                  resizeMode="stretch"
                  style={{ height: height / 25, width: width / 11 }}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.btnoutline,
                  { borderColor: theme.border, backgroundColor: theme.input },
                ]}
              >
                <Image
                  source={theme.apple}
                  resizeMode="stretch"
                  style={{ height: height / 25, width: width / 11 }}
                ></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                paddingTop: 40,
                marginBottom: 10,
              }}
            >
              <Text style={[style.r14, { color: theme.txt3 }]}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={[style.s14, { color: Colors.primary }]}>
                  {" "}
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
