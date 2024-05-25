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
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { Colors } from "../theme/color";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimeSelect from "../components/DateTimeSelect";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";
import ImageProfile from "../components/ImageProfile";
import AutoCompMap from "./AutoCompMap";
import ValInput from "./ValInput";

export default function DetailsSalePoint(props) {
  const {
    setSalePoint,
    salePoint,
    setNavContinue,
    edit,
    productsList,
    setProductsList,
    farm,
  } = props;

  const theme = useContext(themeContext);

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [selectDate, setSelectDate] = useState("");
  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   const dt = new Date(date);
  //   const x = dt.toISOString().split("T");
  //   const x1 = x[0].split("-");
  //   setSelectDate(x1[0] + "/" + x1[1] + "/" + x1[2]);
  //   hideDatePicker();
  // };
  // useEffect(() => {
  //   if (selectDate != "") {
  //     setDateOfBirth(selectDate);
  //   }
  // }, [selectDate]);

  const [flag, setFlag] = useState(false);

  const [dateHour, setDateHour] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPhoneNum, setContactPhoneNum] = useState("");
  const [errors, setErrors] = useState({});

  const [closeDateHourShow, setCloseDateHourShow] = useState(null);

  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const handleSubmit = () => {
    if (validateForm()) {
      const updatedPoint = {
        address,
        dateHour,
        contactName,
        contactPhoneNum,
        rankPrice: 0,
        rankQuality: 0,
        //farmNum: farm.id,
        farmNum: 3, //למחוק אחרי שיש בק
        longitude: longitude.toString(),
        latitude: latitude.toString(),
      };
      const updatedProducts = [{}];
      setSalePoint(updatedPoint);
      setFlag(true);
      setErrors({});
    }
  };

  useEffect(() => {
    if (flag) {
      setNavContinue(true);
    }
    setFlag(false);
  }, [salePoint]);

  //checking every field according to the rules and add to the errors object
  const validateForm = () => {
    const errors = {};
    //contact name
    if (!contactName) errors.contactName = "שדה חובה";
    //contact phone
    const regexContactPhoneNum = /^05\d{8}$/;
    if (!contactPhoneNum) errors.contactPhoneNum = "שדה חובה";
    else if (!regexContactPhoneNum.test(contactPhoneNum)) {
      errors.contactPhoneNum = "מספר טלפון לא תקין";
    }
    //date
    //the end of the tender
    if (!dateHour) errors.dateHour = "שדה חובה";
    else {
      const currentDate = new Date();
      if (dateHour < currentDate) {
        errors.dateHour = "יש להזין מועד עתידי בלבד";
      }
    }
    //address
    if (!address) errors.address = "שדה חובה";
    //products (must select more than one product)
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <View>
      <View style={{ marginTop: 5 }}>
        <Text style={[style.s14, style.textTopInput]}>מיקום</Text>
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


      <DateTimeSelect
        setDateHour={setDateHour}
        setDateHourShow={setCloseDateHourShow}
        DateHourShow={closeDateHourShow}
        content={"שעה ותאריך"}
      />
      {errors.dateHour ? (
        <Text style={style.errorText}>{errors.dateHour}</Text>
      ) : null}

      <ValInput
        val={contactName}
        setVal={setContactName}
        content={"שם איש קשר"}
        keyboardType={"default"}
      />
      {errors.contactName ? (
        <Text style={style.errorText}>{errors.contactName}</Text>
      ) : null}

      <ValInput
        val={contactPhoneNum}
        setVal={setContactPhoneNum}
        content={"טלפון איש הקשר"}
        keyboardType={"numeric"}
        side={true}
      />
      {errors.contactPhoneNum ? (
        <Text style={style.errorText}>{errors.contactPhoneNum}</Text>
      ) : null}

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
          <Text style={style.btntxt}>צור נקודת מכירה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
