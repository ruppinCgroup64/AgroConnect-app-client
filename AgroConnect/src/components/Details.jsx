//complete the details of consumer

import {
  View,
  Text,
  Platform,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";
import ImageProfile from "../components/ImageProfile";
import AutoCompMap from "./AutoCompMap";
import ValInput from "./ValInput";

export default function Details(props) {
  const {
    consumer,
    setConsumer,
    setNavContinue,
    edit,
    emailExists,
    profilePic,
  } = props;

  const theme = useContext(themeContext);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [birthDate, setBirthDate] = useState(null);
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
    setSelectDate(x1[0] + "/" + x1[1] + "/" + x1[2]);
    hideDatePicker();
  };
  useEffect(() => {
    if (selectDate != "") {
      setDateOfBirth(selectDate);
    }
  }, [selectDate]);

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

  const [firstName, setFirstName] = useState(() =>
    consumer && consumer.firstName ? consumer.firstName : ""
  );
  const [lastName, setLastName] = useState(() =>
    consumer && consumer.lastName ? consumer.lastName : ""
  );
  const [dateOfBirth, setDateOfBirth] = useState(() => {
    if (consumer && consumer.dateOfBirth) {
      const dateTime = consumer.dateOfBirth;
      const dateOnly = dateTime.split(" ")[0];
      return dateOnly;
    } else return "";
  });

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
    consumer && consumer.address ? consumer.address : ""
  );

  const [latitude, setLatitude] = useState(() =>
    consumer && consumer.latitude ? consumer.latitude : ""
  );

  const [longitude, setLongitude] = useState(() =>
    consumer && consumer.longitude ? consumer.longitude : ""
  );

  const [password, setPassword] = useState(() =>
    consumer && consumer.password ? consumer.password : ""
  );
  const [confirmPassword, setConfirmPassword] = useState(() =>
    edit ? consumer.password : ""
  );

  // const [profilePic, setProfilePic] = useState(() =>
  //   consumer && consumer.profilePic ? consumer.profilePic : ""
  // );

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const handleSubmit = () => {
    if (validateForm()) {
      const updatedConsumer = {
        id: 0,
        email,
        firstName,
        lastName,
        password,
        gender: gender,
        dateOfBirth: dateOfBirth == "" ? "2024/01/01" : dateOfBirth,
        phoneNum,
        address,
        registrationDate: "",
        profilePic,
        isFarmer: isChecked,
        longitude: longitude.toString(),
        latitude: latitude.toString(),
      };
      setConsumer(updatedConsumer);
      setFlag(true);
      setErrors({});
    }
  };

  useEffect(() => {
    if (flag) {
      setNavContinue(true);
    }
    setFlag(false);
  }, [consumer]);

  //checking every field according to the rules and add to the errors object
  const validateForm = () => {
    const errors = {};
    //first name
    if (!firstName) errors.firstName = "שדה חובה";
    //last name
    if (!lastName) errors.lastName = "שדה חובה";
    //dateOfBirth
    //if (!dateOfBirth) errors.dateOfBirth = "שדה חובה";
    //gender
    if (!gender) errors.gender = "שדה חובה";
    //password
    const regexPassword =
      /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()]{3,10}$/;
    if (!regexPassword.test(password)) {
      errors.password =
        "סיסמא לא תקינה - נדרש: לפחות תו אחד מיוחד !@#$%^&*(), לפחות אות אחת גדולה, לפחות מספר אחד, ובאורך של בין 3-10 תווים ";
    } else if (!password) errors.password = "שדה חובה";
    if (!password) errors.password = "שדה חובה";
    //confirm password
    if (!confirmPassword) errors.confirmPassword = "שדה חובה";
    else if (password != confirmPassword) {
      errors.confirmPassword = "הסיסמאות חייבות להיות זהות";
    }
    //email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!edit) {
      if (!email) errors.email = "שדה חובה";
      else if (!regexEmail.test(email)) {
        errors.email = "כתובת מייל לא תקינה";
      }
    }
    //phone
    const regexPhone = /^05\d{8}$/;
    if (!phoneNum) errors.phoneNum = "שדה חובה";
    else if (!regexPhone.test(phoneNum)) {
      errors.phoneNum = "מספר טלפון לא תקין";
    }
    //address
    if (!address) errors.address = "שדה חובה";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <View>
      <ValInput
        val={firstName}
        setVal={setFirstName}
        content={"שם פרטי"}
        keyboardType={"default"}
      />
      {errors.firstName ? (
        <Text style={style.errorText}>{errors.firstName}</Text>
      ) : null}
      <ValInput
        val={lastName}
        setVal={setLastName}
        content={"שם משפחה"}
        keyboardType={"default"}
      />
      {errors.lastName ? (
        <Text style={style.errorText}>{errors.lastName}</Text>
      ) : null}

      <View style={{ marginTop: 5 }}>
        <Text style={[style.s14, style.textTopInput]}>תאריך לידה</Text>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
            },
          ]}
        >
          <TextInput
            textAlign="right"
            selectionColor={Colors.primary}
            value={selectDate || dateOfBirth}
            style={[style.s14, { color: theme.txt, flex: 1 }]}
          />
          <TouchableOpacity onPress={showDatePicker}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              display="calendar"
            />
            <Icon name="calendar-outline" color={Colors.disable} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      {errors.dateOfBirth ? (
        <Text style={style.errorText}>{errors.dateOfBirth}</Text>
      ) : null}

      <View style={{ display: edit ? "none" : "flex" }}>
        <Text style={[style.s14, style.textTopInput]}>מין</Text>
        <DropDownPicker
          listMode="MODAL"
          placeholder="בחר"
          open={open}
          value={value || gender}
          items={items}
          setOpen={setOpen}
          setValue={(newValue) => {
            setValue(newValue);
            setGender(newValue);
          }}
          setItems={setItems}
          style={[
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
              color: theme.txt,
              flex: 1,
              borderRadius: 15,
              marginTop: 5,
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
            marginTop: 10,
            zIndex: 1000,
          }}
        />
        {errors.gender ? (
          <Text style={style.errorText}>{errors.gender}</Text>
        ) : null}
      </View>

      <View style={{ marginTop: 5 }}>
        <Text style={[style.s14, style.textTopInput]}>כתובת מגורים</Text>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
            },
          ]}
        >
          <TextInput
            textAlign="right"
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            style={[style.s14, { color: theme.txt, flex: 1 }]}
            onFocus={() => setPlacesModalVisible(true)}
            value={address}
          />
        </View>
      </View>
      {errors.address ? (
        <Text style={style.errorText}>{errors.address}</Text>
      ) : null}

      <View style={{ display: edit ? "none" : "flex" }}>
        <ValInput
          val={email}
          setVal={setEmail}
          content={"אימייל"}
          keyboardType={"email-address"}
          side={true}
        />
        {errors.email ? (
          <Text style={style.errorText}>{errors.email}</Text>
        ) : emailExists ? (
          <Text style={style.errorText}>אימייל כבר קיים</Text>
        ) : null}
      </View>

      <ValInput
        val={phoneNum}
        setVal={setPhoneNum}
        content={"מספר טלפון"}
        keyboardType={"numeric"}
        side={true}
      />
      {errors.phoneNum ? (
        <Text style={style.errorText}>{errors.phoneNum}</Text>
      ) : null}

      <View style={{ marginTop: 5 }}>
        <Text style={[style.s14, style.textTopInput]}>סיסמא</Text>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
              marginTop: 5,
            },
          ]}
        >
          <TextInput
            value={password}
            selectionColor={Colors.primary}
            style={[
              style.s14,
              { color: theme.txt, flex: 1 },
              { textAlign: password ? "left" : "right" },
            ]}
            onChangeText={setPassword}
          />
        </View>
      </View>
      {errors.password ? (
        <Text style={style.errorText}>{errors.password}</Text>
      ) : null}

      <View style={{ marginTop: 5 }}>
        <Text style={[style.s14, style.textTopInput]}>אישור סיסמא</Text>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: theme.input,
              borderWidth: 1,
              backgroundColor: theme.input,
              marginTop: 5,
            },
          ]}
        >
          <TextInput
            value={confirmPassword}
            selectionColor={Colors.primary}
            style={[
              style.s14,
              { color: theme.txt, flex: 1 },
              { textAlign: confirmPassword ? "left" : "right" },
            ]}
            onChangeText={setConfirmPassword}
          />
        </View>
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
          <AutoCompMap
            setAddress={setAddress}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setPlacesModalVisible={setPlacesModalVisible}
          />
        </SafeAreaView>
      </Modal>
      <View style={{ marginBottom: 50 }}>
        <TouchableOpacity onPress={handleSubmit} style={style.btn}>
          <Text style={style.btntxt}>אישור</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}