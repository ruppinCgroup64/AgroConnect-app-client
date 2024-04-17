import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
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
import ImageProfile from "../components/ImageProfile";
import RBSheet from "react-native-raw-bottom-sheet";
import AutoCompMap from "./AutoCompMap";

export default function Details(props) {
  const { consumer, setConsumer, setNavContinue, edit } = props;

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
    setDateOfBirth(selectDate);
    hideDatePicker();
  };

  const [isChecked, setChecked] = useState(() =>
    consumer && consumer.isFarmer ? consumer.isFarmer : false
  );
  const [flag, setFlag] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "זכר", value: "זכר" },
    { label: "נקבה", value: "נקבה" },
    { label: "אחר", value: "אחר" },
  ]);

  const [addressName, setAddressName] = useState("")

  const [firstName, setFirstName] = useState(() =>
    consumer && consumer.firstName ? consumer.firstName : ""
  );
  const [lastName, setLastName] = useState(() =>
    consumer && consumer.lastName ? consumer.lastName : ""
  );
  const [dateOfBirth, setDateOfBirth] = useState(() =>
    consumer && consumer.dateOfBirth ? consumer.dateOfBirth : ""
  );
  const [gender, setGender] = useState(() =>
    consumer && consumer.gender ? consumer.gender : ""
  );
  const [email, setEmail] = useState(() =>
    consumer && consumer.email ? consumer.email : ""
  );
  const [phoneNum, setPhoneNum] = useState(() =>
    consumer && consumer.phoneNum ? consumer.phoneNum : ""
  );
  const [address, setAddress] = useState(() =>
    consumer && consumer.addressName ? consumer.addressName : {}
  );
  const [password, setPassword] = useState(() =>
    consumer && consumer.password ? consumer.password : ""
  );
  const [confirmPassword, setConfirmPassword] = useState(() =>
    consumer && consumer.confirmPassword ? consumer.confirmPassword : ""
  );
  const [profilePic, setProfilePic] = useState(() =>
    consumer && consumer.profilePic ? consumer.profilePic : ""
  );

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  useEffect(() => {
    if (flag) {
      updatedConsumer = {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        email,
        phoneNum,
        address,
        addressName,//לשים לב שיש עוד שדה שזה השם עצמו- אולי להסיר אחרי שיודעת להמיר לשם
        password,
        profilePic,
        isFarmer: isChecked,
      };
      setConsumer(updatedConsumer);
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      setNavContinue(true);
    }
    setFlag(false);
  }, [consumer]);

  const handleSubmit = () => {
    //if (validateForm())
    {
      setFlag(true);
      console.log("submitted");
      setErrors({});
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
    //dateOfBirth
    if (!dateOfBirth) errors.dateOfBirth = "שדה חובה";
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
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageProfile setProfilePic={setProfilePic} />
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
            value={selectDate || dateOfBirth}
            style={[style.s14, { color: theme.txt, flex: 1 }]}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Icon name="calendar-outline" color={Colors.disable} size={20} />
          </TouchableOpacity>
        </View>
        {errors.dateOfBirth ? (
          <Text style={style.errorText}>{errors.dateOfBirth}</Text>
        ) : null}
        <DropDownPicker
          listMode="MODAL"
          open={open}
          value={value || gender}
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
            value={addressName}
          />
        </View>
        {errors.address ? (
          <Text style={style.errorText}>{errors.address}</Text>
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
            placeholder="אימייל"
            value={email}
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
            value={phoneNum}
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
            value={password}
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            secureTextEntry={true}
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
            value={confirmPassword}
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            secureTextEntry={true}
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
          <View style={{ display: edit ? "none" : "flex" }}>
            <Text
              style={[
                style.s14,
                {
                  color: theme.txt,
                },
              ]}
            >
              <Checkbox
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
            <AutoCompMap setAddress={setAddress} />
            {/* <GooglePlacesAutocomplete
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
                onChangeText: (text) => setAddress(text),
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
            /> */}
            <TouchableOpacity
              onPress={() => {
                setPlacesModalVisible(false);
                if (address != []) {
                  setAddressName(address[1].address.freeformAddress);
                  setAddress(address[0].position);
                }
              }}
              style={[style.btnSave, { alignSelf: "center" }]}
            >
              <Text style={style.btntxt}>שמור</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
        <View style={{ marginBottom: 50 }}>
          <TouchableOpacity onPress={handleSubmit} style={style.btn}>
            <Text style={style.btntxt}>אישור</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
