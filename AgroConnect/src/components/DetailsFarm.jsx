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
import ImageProfile from "../components/ImageProfile";
import AutoCompMap from "./AutoCompMap";

export default function DetailsFarm(props) {
  const {mainPic,setFarm, setNavContinue, farmerID, farm} = props;

  const theme = useContext(themeContext);
  const [flag, setFlag] = useState(false);

  const [farmName, setFarmName] = useState(() =>
    farm && farm.farmName ? farm.farmName : ""
  );
  const [address, setAddress] = useState(
    farm && farm.address ? farm.address : ""
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
  // const [mainPic, setMainPic] = useState(
  //   farm && farm.mainPic ? farm.mainPic : ""
  // );
  const [consumerNum, setConsumerNum] = useState(
    farm && farm.consumerNum ? farm.consumerNum : farmerID
  );

  const [errors, setErrors] = useState({});
  const [isPlacesModalVisible, setPlacesModalVisible] = useState(false);
  const [finalPic, setFinalPic] = useState("")

  const handleSubmit = () => {
    //if (validateForm())
      {
      const updatedFarm = {
        id: 0,
        name:farmName,
        address,
        longitude: longitude.toString(),
        latitude:latitude.toString(),
        socialNetworkLink,
        rank:0,
        mainPic,
        farmerId:consumerNum,
      };
      console.log("1")
      setFarm(updatedFarm);
      setFlag(true)
      setErrors({});
    }
  };

  useEffect(() => {
    if (flag) {
      setNavContinue(true); 
      console.log("2")
    }
    setFlag(false)
  }, [farm]);


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
            keyboardType="url"
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
    </View>
  );
}
