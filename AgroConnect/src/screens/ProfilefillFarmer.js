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
  ScrollView,
} from "react-native";
import style from "../theme/style";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import SuccessAlert from "../components/SuccessAlert";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { UsersContext } from "../Context/UserContext";
import ImageProfile from "../components/ImageProfile";
import { uploadFile } from "../api";

export default function ProfilefillFarmer({ route }) {
  const { farmerID } = route.params;

  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const { registerFarm, updateFarm, farm } = useContext(UsersContext);

  const [navContinue, setNavContinue] = useState(false);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const [updated, setUpdated] = useState(false);
  const [updatedFarm, setUpdatedFarm] = useState(farm);

  const [mainPic, setMainPic] = useState("");

  useEffect(() => {
    if (navContinue) {
      console.log("3");
      const fetchData = async () => {
        //register farm
        let res = await registerFarm(updatedFarm); //the res is the true- need to chang to object
        console.log(res)
        if (res) {
          let updatedRes = {};
          if (updatedFarm.mainPic != "") {
            //if the user selected image
            let resImg = await uploadFile(updatedFarm.mainPic); //upload image to the server
            if (resImg) {
              updatedRes = {
                //take the original object from the server and change its image
                ...res,
                mainPic: resImg,
              };
            } else {
              updatedRes = {
                ...res,
                mainPic:
                  "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoFarm.png",
              };
            }
          } else {
            updatedRes = {
              ...res,
              mainPic:
                "https://proj.ruppin.ac.il/cgroup64/test2/tar1/images/demoFarm.png",
            };
          }
          setUpdatedFarm(updatedRes);
        }
      };
      fetchData();
    }
    setNavContinue(false);
  }, [navContinue]);

  useEffect(() => {
    if (
      updatedFarm &&
      updated == false &&
      updatedFarm.mainPic &&
      updatedFarm.mainPic != ""
    ) 
    {
      console.log("4");
      //the user has not been updated after change image in DB
      let ans = updatedFarm.mainPic.toLowerCase().includes("https"); //the image selected
      console.log("5");
      if (ans) {
        console.log("6");
        const fetchData = async () => {
          console.log(updatedFarm)
          let res = await updateFarm(updatedFarm); //update the user's image in the DB
          if (res) {
            console.log("now",res)
            setUpdated(true);
          }
        };
        fetchData();
      }
    }
  }, [updatedFarm]);

  useEffect(() => {
    if (
      updatedFarm &&
      updatedFarm.mainPic &&
      updatedFarm.mainPic != "" &&
      updatedFarm.mainPic.toLowerCase().includes("https")
    ) {
      setShow(true);
      setContent("המשק שלך נרשם בהצלחה");
    }
  }, [farm]);

  useEffect(() => {
    if (content != "") {
      setShow(true);
    }
  }, [content]);

  useEffect(() => {
    if (content != "") {
      const timer = setTimeout(() => {
        navigation.navigate("MyTabs");
      }, 2000);
    }
  }, [show]);

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
          <ScrollView
             style={{ marginTop: 15 }}
             showsVerticalScrollIndicator={false}
             keyboardShouldPersistTaps="handled"
          >
            <ImageProfile userImageURI={mainPic} setProfilePic={setMainPic} />
            <DetailsFarm
              mainPic={mainPic}
              setFarm={setUpdatedFarm}
              setNavContinue={setNavContinue}
              farmerID={farmerID}
              farm={updatedFarm}
            />
          </ScrollView>
          <SuccessAlert show={show} setShow={setShow} content={content} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
