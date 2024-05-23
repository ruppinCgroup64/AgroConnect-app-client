//Registration of the farm of the farmer

import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import DetailsFarm from "../components/DetailsFarm";
import {
  View,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { UsersContext } from "../Context/UserContext";

export default function ProfilefillFarmer({ route }) {
  const { farmerID } = route.params
  //const farmerID = 1052;

  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const { registerFarm, setFarm, updateFarm, farm } = useContext(UsersContext);

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const [updated, setUpdated] = useState(false);
  const [updatedFarm, setUpdatedFarm] = useState(farm);

  useEffect(() => {
    if (navContinue) {
      console.log("3")
      const fetchData = async () => {
        //register farm
        let res = await registerFarm(updatedFarm); //the res is the true- need to chang to object
        if (res==1) {
          if (updatedFarm.mainPic != "") {
            //if the user selected image
            let resImg = await uploadFile(updatedFarm.mainPic); //upload image to the server
            if (resImg) {
              setUpdatedFarm((prevState) => ({
                ...prevState,
                mainPic: resImg,
              }));
            } else {
              setUpdatedFarm((prevState) => ({
                ...prevState,
                mainPic:
                  "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoFarm.png",
              }));
            }
          } else {
            setUpdatedFarm((prevState) => ({
              ...prevState,
              mainPic:
                "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoFarm.png",
            }));
          }
        }
      };
      fetchData();
    }
    setNavContinue(false);
  }, [navContinue]);

  useEffect(() => {
    if (updatedFarm && updated == false && updatedFarm.mainPic != "") {
      console.log("4")
      //the user has not been updated after change image in DB
      console.log("ue",updatedFarm)
      let ans = updatedFarm.mainPic.toLowerCase().includes("https"); //the image selected
      console.log("5")
      if (ans) {
        const fetchData = async () => {
          let res = await updateFarm(updatedFarm); //update the user's image in the DB
          if (res) {
            setUpdated(true);
            setFarm(res); //update the context farm
          }
        };
        fetchData();
        navigation.navigate("Welcome");
      }
    }
  }, [updatedFarm]);

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
            title="רישום משק"
            titleStyle={[
              style.apptitle,
              { color: theme.txt, textAlign: "center" },
            ]}
            style={{ paddingBottom: 15 }}
            elevation={0}
            trailing={<View style={{ width: 30, height: 30, opacity: 0 }} />}
          />

          <DetailsFarm
            setFarm={setUpdatedFarm}
            setNavContinue={setNavContinue}
            farmerID={farmerID}
            farm={updatedFarm}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
