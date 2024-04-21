//complete the details of farm

import {
  View,
  Text,
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
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ImageProfile from "../components/ImageProfile";
import RBSheet from "react-native-raw-bottom-sheet";
import AutoCompMap from "./AutoCompMap";

export default function DetailsFarm(props) {
  const { farm, setFarm, setNavContinue } = props;

  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [flag, setFlag] = useState(false);

  const [farmName, setFarmName] = useState(() =>
    farm && farm.farmName ? farm.farmName : ""
  );
  const [address, setAddress] = useState(
    farm && farm.address ? farm.address : {}
  );

  const [latitude, setLatitude] = useState(() =>
    farm && farm.latitude ? farm.latitude : ""
  );

  const [longitude, setLongitude] = useState(() =>
    farm && farm.longitude ? farm.longitude : ""
  );

  const [socialNetworkLink, setSocialNetworkLink] = useState(
    farm && farm.socialNetworkLink ? farm.socialNetworkLink : ""
  );
  const [mainPic, setMainPic] = useState(
    farm && farm.mainPic ? farm.mainPic : null
  );
  const [consumerNum, setConsumerNum] = useState(
    farm && farm.consumerNum ? farm.consumerNum : -1
  );

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);

  useEffect(() => {
    if (flag) {
      const updatedFarm = {
        farmName,
        address,
        latitude,
        longitude,
        socialNetworkLink,
        mainPic,
        consumerNum,
      };
      setFarm(updatedFarm);
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      setNavContinue(true);
    }
  }, [farm]);

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
    //farm name
    if (!farmName) errors.farmName = "שדה חובה";
    //address
    if (!address) errors.address = "שדה חובה";
    //socialNetworkLink
    const regexSocialNetworkLink =
      /\b((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?)\b/;
    if (
      !regexSocialNetworkLink.test(socialNetworkLink) &&
      socialNetworkLink != ""
    ) {
      errors.socialNetworkLink = "כתובת לא תקינה";
    }
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageProfile userImageURI={mainPic} setProfilePic={setMainPic} />
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
            placeholder="שם המשק"
            textAlign="right"
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            style={[style.s14, { color: theme.txt, flex: 1 }]}
            onChangeText={setFarmName}
            value={farmName}
          />
        </View>
        {errors.farmName ? (
          <Text style={style.errorText}>{errors.farmName}</Text>
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
            placeholder="כתובת המשק"
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
            {/* <GooglePlacesAutocomplete
                  placeholder="עיר, רחוב, מספר משק"
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
          </SafeAreaView>
        </Modal>
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
            placeholder="קישור לעמוד ברשת חברתית"
            textAlign="right"
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.disable}
            style={[style.s14, { color: theme.txt, flex: 1 }]}
            onChangeText={setSocialNetworkLink}
            value={socialNetworkLink}
          />
        </View>
        {errors.socialNetworkLink ? (
          <Text style={style.errorText}>{errors.socialNetworkLink}</Text>
        ) : null}

        <View style={{ marginTop: 40, marginBottom: 20 }}>
          <TouchableOpacity onPress={handleSubmit} style={style.btn}>
            <Text style={style.btntxt}>אישור</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
