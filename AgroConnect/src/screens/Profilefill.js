import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Button,
} from "react-native";
import React, { useState, useContext } from "react";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import { useNavigation } from "@react-navigation/native";
import { AppBar, Avatar, useSurfaceColor } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Profilefill() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    setSelectDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    setBirth(selectDate);
    hideDatePicker();
  };

  const [isChecked, setChecked] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "זכר", value: "male" },
    { label: "נקבה", value: "female" },
    { label: "אחר", value: "other" },
  ]);

  const [addressText, setAddressText] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [img, setImg] = useState("");
  const [isFarmer, setIsFarmer] = useState(false);

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("submitted"); //API place
      if (isChecked == true) setIsFarmer(true);
      user = {
        firstName,
        lastName,
        birth,
        gender,
        email,
        phoneNum,
        address,
        password,
        img,
        isFarmer,
      };
      // regPost(user);//API request
      setEmail("");
      setPassword("");
      setErrors({});
      if (isChecked == true) navigation.navigate("ProfilefillFarmer");
      else console.log("modalSuccess reg");
    }
  };
  //checking every field according to the rules and add to the errors object
  const validateForm = () => {
    const errors = {};
    //first name
    //const regexFirstName = /^[א-ת]+(?:\s[א-ת]+)*$/;
    if (!firstName) errors.firstName = "שדה חובה";
    // else if (!regexFirstName.test(firstName)) {
    //   errors.firstName = "שם פרטי לא תקין";
    // }
    //last name
    // const regexLastName = /^[א-ת]{1,60}$/;
    // if (!regexLastName.test(lastName)) {
    //   errors.lastName = "שם משפחה לא תקין";
    // } else
    if (!firstName) errors.lastName = "שדה חובה";
    //birth
    if (!birth) errors.birth = "שדה חובה";
    //gender
    if (!gender) errors.gender = "שדה חובה";
    //password
    // const regexPassword =
    //   /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()]{7,12}$/;
    // if (!regexPassword.test(password)) {
    //   errors.password = "סיסמא לא תקינה";
    // } else if (!password) errors.password = "שדה חובה";
    if (!password) errors.password = "שדה חובה";
    //confirm password
    if (!confirmPassword) errors.confirmPassword = "שדה חובה";
    else if (password != confirmPassword) {
      errors.confirmPassword = "הסיסמאות חייבות להיות זהות";
    }
    //email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) errors.email = "שדה חובה";
    // else if (!regexEmail.test(email)) {
    //   errors.email = "כתובת מייל לא תקינה";
    // }
    const regexPhone = /^05\d{8}$/;
    if (!phoneNum) errors.phoneNum = "שדה חובה";
    else if (!regexPhone.test(phoneNum)) {
      errors.phoneNum = "מספר טלפון לא תקין";
    }
    if (!address) errors.address = "שדה חובה";
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View
          style={[style.main, { backgroundColor: theme.bg, marginTop: 15 }]}
        >
          <AppBar
            color={theme.bg}
            title="הרשמה"
            titleStyle={[style.s18, { color: theme.txt, textAlign: "center" }]}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Icon
                  name="arrow-back"
                  color={theme.txt}
                  size={30}
                  style={{
                    transform: [{ scaleX: -1 }],
                  }}
                />
              </TouchableOpacity>
            }
            trailing={<View style={{ width: 30, height: 30, opacity: 0 }} />}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require("../../assets/image/User.png")}
              style={{
                height: height / 8,
                width: width / 3.2,
                resizeMode: "stretch",
                alignSelf: "center",
                marginTop: 15,
              }}
            ></Image>
            <View
              style={[
                style.txtinput,
                {
                  borderColor: theme.input,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="שם פרטי"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onChangeText={setFirstName}
                value={firstName}
              />
            </View>
            {errors.firstName ? (
              <Text style={style.errorText}>{errors.firstName}</Text>
            ) : null}
            <View
              style={[
                style.txtinput,
                {
                  borderColor: theme.input,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="שם משפחה"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onChangeText={setLastName}
                value={lastName}
              />
            </View>
            {errors.lastName ? (
              <Text style={style.errorText}>{errors.lastName}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="תאריך לידה"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                value={selectDate}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <Icon
                  name="calendar-outline"
                  color={Colors.disable}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {errors.birth ? (
              <Text style={style.errorText}>{errors.birth}</Text>
            ) : null}
            <DropDownPicker
              listMode="MODAL"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={(newValue) => {
                setValue(newValue);
                setGender(newValue);
              }}
              setItems={setItems}
              placeholder="מין"
              placeholderStyle={{
                color: Colors.disable,
              }}
              style={[
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  color: theme.txt,
                  flex: 1,
                  borderRadius: 15,
                  marginTop: 20,
                },
                style.s14,
              ]}
              textStyle={[
                style.s14,
                {
                  textAlign: "left",
                  color: theme.txt,
                },
              ]}
              dropDownContainerStyle={{
                borderColor: theme.input,
                backgroundColor: theme.input,
                marginTop: 10, // Small gap between the picker and the dropdown
                zIndex: 1000, // Ensure it renders on top of other components if needed
              }}
            />
            {errors.gender ? (
              <Text style={style.errorText}>{errors.gender}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="כתובת מגורים"
                textAlign="right"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.s14, { color: theme.txt, flex: 1 }]}
                onFocus={() => setPlacesModalVisible(true)}
                value={addressText}
              />
            </View>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="אימייל"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.s14,
                  { color: theme.txt, flex: 1 },
                  { textAlign: email ? "left" : "right" },
                ]}
                onChangeText={setEmail}
              />
            </View>
            {errors.email ? (
              <Text style={style.errorText}>{errors.email}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="מספר טלפון"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.s14,
                  { color: theme.txt, flex: 1 },
                  { textAlign: phoneNum ? "left" : "right" },
                ]}
                onChangeText={setPhoneNum}
                keyboardType="numeric"
              />
            </View>
            {errors.phoneNum ? (
              <Text style={style.errorText}>{errors.phoneNum}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="סיסמא"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.s14,
                  { color: theme.txt, flex: 1 },
                  { textAlign: password ? "left" : "right" },
                ]}
                onChangeText={setPassword}
              />
            </View>
            {errors.password ? (
              <Text style={style.errorText}>{errors.password}</Text>
            ) : null}
            <View
              style={[
                style.inputContainer,
                {
                  borderColor: theme.input,
                  borderWidth: 1,
                  backgroundColor: theme.input,
                  marginTop: 20,
                },
              ]}
            >
              <TextInput
                placeholder="אישור סיסמא"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  style.s14,
                  { color: theme.txt, flex: 1 },
                  { textAlign: confirmPassword ? "left" : "right" },
                ]}
                onChangeText={setConfirmPassword}
              />
            </View>
            {errors.confirmPassword ? (
              <Text style={style.errorText}>{errors.confirmPassword}</Text>
            ) : null}
            {errors.address ? (
              <Text style={style.errorText}>{errors.address}</Text>
            ) : null}
            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                paddingLeft: 10,
                alignItems: "center",
                justifyContent: "flex-start",
                marginRight: 5,
              }}
            >
              <View>
                <Text
                  style={[
                    style.s14,
                    {
                      color: theme.txt,
                    },
                  ]}
                >
                  <Checkbox
                    // style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? Colors.primary : Colors.disable}
                  />{" "}
                  אני חקלאי
                </Text>
              </View>
            </View>

            <Modal
              animationType="slide"
              transparent={false}
              visible={isPlacesModalVisible}
              onRequestClose={() => {
                setPlacesModalVisible(!isPlacesModalVisible);
              }}
            >
              <SafeAreaView style={style.modalView}>
                <GooglePlacesAutocomplete
                  placeholder="עיר, רחוב, מספר בית"
                  onPress={(data, details = null) => {
                    console.log(JSON.stringify(data));
                    console.log(JSON.stringify(details?.geometry?.location));
                    setAddress();
                  }}
                  query={{
                    key: "AIzaSyCkv5saCxh1Fsr6xNiJatbWcq28VnmrxAA",
                    language: "he",
                  }}
                  textInputProps={{
                    selectionColor: Colors.primary,
                    placeholderTextColor: Colors.disable,
                    style: [
                      style.s14,
                      {
                        color: theme.txt,
                        flex: 1,
                        textAlign: "right",
                        height: 50,
                      },
                    ],
                    onChangeText: (text) => setAddressText(text),
                  }}
                  styles={{
                    textInputContainer: {
                      backgroundColor: theme.input,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      marginTop: 20,
                    },
                    textInput: {
                      height: 40,
                      borderWidth: 1,
                      borderColor: theme.input,
                      backgroundColor: theme.input,
                    },
                    predefinedPlacesDescription: {
                      color: "#1faadb",
                    },
                  }}
                  fetchDetails={true}
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                />
                <TouchableOpacity
                  onPress={() => {
                    setPlacesModalVisible(false);
                    console.log(addressText);
                  }}
                  style={[style.btnSave, { alignSelf: "center" }]}
                >
                  <Text style={style.btntxt}>שמור</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </Modal>
            <View style={{ marginTop: 40, marginBottom: 20 }}>
              <TouchableOpacity onPress={handleSubmit} style={style.btn}>
                <Text style={style.btntxt}>אישור</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
