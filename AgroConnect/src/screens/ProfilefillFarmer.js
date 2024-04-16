import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import DetailsFarm from "../components/DetailsFarm";

export default function Profilefill() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);

  const [updatedFarm, setUpdatedFarm] =  useState({
    farmName:"המשק",
    address:"ויתקין, החרוב, 1",
    socialNetworkLink: "https://www.facebook.com/HAMESHEK.Hod.Hasharon/",
    mainPic: "file:///var/mobile/Containers/Data/Application/DA33310A-7189-40D0-AAD7-855F44CD2353/Library/Caches/ExponentExperienceData/@anonymous/AgroConnect-a9363ae1-df3b-4be5-aa0a-fec0396bfdda/ImagePicker/3191E62A-A295-4C27-B4D8-08D4785087DA.jpg",
    consumerNum: 1
  });

  useEffect(() => {
    if(navContinue) navigation.navigate("Welcome");
  }, [navContinue]);


  return (
    <DetailsFarm farm={updatedFarm} setFarm={setUpdatedFarm} setNavContinue={setNavContinue} />
  );
}
