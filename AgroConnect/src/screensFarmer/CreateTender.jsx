//create tender

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
import AutoCompMap from "../components/AutoCompMap";
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UserContext";
import RoundedImage from "../components/RoundImage";
import { colors } from "react-native-elements";

export default function CreateTender() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const { products } = useContext(ProductContext); //נשים ברשימה של אייטמים
  const { farm } = useContext(UsersContext);

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

  const [tender, setTender] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [flag, setFlag] = useState(false);

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(() =>
    products.map((p) => ({ value: p.id, label: p.name }))
  );
  const [errors, setErrors] = useState({});
  const [navContinue, setNavContinue] = useState(false);
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  const [offeredPack, setOfferedPack] = useState(null);
  const [packsAmount, setPacksAmount] = useState(null);
  const [initialOffer, setInitialOffer] = useState(null);
  const [closeDateHour, setCloseDateHour] = useState(null);
  const [collectAddress, setCollectAddress] = useState(null);
  const [collectDateHour, setCollectDateHour] = useState(null);
  const [productNum, setCProductNum] = useState(null);

  useEffect(() => {
    if (flag) {
      setTender({
        offeredPack,
        packsAmount,
        initialOffer,
        closeDateHour,
        collectAddress,
        collectDateHour,
        farmNum: farm.farmID,
        productNum,
      });
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      setNavContinue(true);
    }
    setFlag(false);
  }, [tender]);

  useEffect(() => {
    //navigation.navigate(""); //שליחת אובייקט המכרז לאחר פרסומו לעמוד מכרז צד חקלאי
  }, [navContinue]);

     useEffect(()=>{
      console.log(selectedProduct)
       },[selectedProduct])

  const handleSubmit = () => {
    //if (validateForm())
    {
      setFlag(true);
      console.log("submitted");
      console.log(tender);
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
    //selectedProduct
    if (!selectedProduct) errors.selectedProduct = "שדה חובה";
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
    <SafeAreaView
      style={[style.area, { backgroundColor: theme.bg, marginTop: 15 }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <AppBar
          color={theme.bg}
          title="יצירת מכרז"
          titleStyle={[
            style.apptitle,
            { color: theme.txt, textAlign: "center" },
          ]}
          style={{ paddingBottom: 15 }}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => this.RBSheet14.open()}>
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

        <RBSheet
          ref={(ref) => {
            this.RBSheet14 = ref;
          }}
          height={250}
          openDuration={100}
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: theme.bg,
            },
          }}
        >
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Text
              style={[
                style.apptitleSB,
                { textAlign: "center", color: "#F75555" },
              ]}
            >
              ביטול
            </Text>
            <View
              style={[
                style.divider,
                { marginVertical: 10, backgroundColor: "#EEEEEE" },
              ]}
            ></View>
            <View style={{ paddingTop: 20 }}>
              <Text
                style={[style.m18, { color: theme.txt, textAlign: "center" }]}
              >
                במידה ותבחר לעזוב פרטיך יימחקו
              </Text>
            </View>
            <View style={{ marginTop: 25, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.RBSheet14.close()}
                style={[style.btn, { backgroundColor: theme.btn, flex: 1 }]}
              >
                <Text style={[style.btntxt, { color: theme.btntxt }]}>
                  הישאר
                </Text>
              </TouchableOpacity>
              <View style={{ margin: 5 }}></View>
              <TouchableOpacity
                onPress={() => {
                  this.RBSheet14.close(), navigation.navigate("Login");
                }}
                style={[style.btn, { flex: 1 }]}
              >
                <Text style={[style.btntxt, { color: Colors.secondary }]}>
                  מחק
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"always"}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <DropDownPicker
              listMode="MODAL"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={(newValue) => {
                setValue(newValue);
              }}
              onSelectItem={(item) => 
                {
                  const p= products.find((x)=> {
                    if(x.id==item.value) setSelectedProduct(x)
                })}}
              setItems={setItems}
              placeholder="בחר מוצר"
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
                  marginBottom: 20,
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
            />
            {errors.selectedProduct ? (
              <Text style={style.errorText}>{errors.selectedProduct}</Text>
            ) : null}
            <RoundedImage
              url={selectedProduct ? selectedProduct.url : null}
              wid={100}
              hei={100}
            />
          </View>
          {/* <View
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
                placeholder="מועד סגירת המכרז"
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
                <Icon
                  name="calendar-outline"
                  color={Colors.disable}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            {errors.dateOfBirth ? (
              <Text style={style.errorText}>{errors.dateOfBirth}</Text>
            ) : null} */}

          {/* <View
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
                value={address}
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
                <AutoCompMap
                  setAddress={setAddress}
                  setLatitude={setLatitude}
                  setLongitude={setLongitude}
                  setPlacesModalVisible={setPlacesModalVisible}
                /> */}
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
          {/* </SafeAreaView>
            </Modal> */}
          <View style={{ marginBottom: 50 }}>
            <TouchableOpacity onPress={handleSubmit} style={style.btn}>
              <Text style={style.btntxt}>אישור</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
