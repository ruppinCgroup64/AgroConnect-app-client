import React, { useState, useContext, useEffect } from "react";
import themeContext from "../theme/themeContex";
import { useNavigation } from "@react-navigation/native";
import Details from "../components/Details";

export default function Profilefill() {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const [navContinue, setNavContinue] = useState(false);

  const [updatedConsumer, setUpdatedConsumer] = useState({
    firstName: "עדי",
    lastName: "חדד",
    dateOfBirth: "30/08/1998",
    gender: "נקבה",
    email: "adi@gmail.com",
    phoneNum: "0501234567",
    address: "בארותיים, הפלג, 200",
    password: "1234",
    confirmPassword: "1234",
    profilePic:
      "file:///var/mobile/Containers/Data/Application/DA33310A-7189-40D0-AAD7-855F44CD2353/Library/Caches/ExponentExperienceData/@anonymous/AgroConnect-a9363ae1-df3b-4be5-aa0a-fec0396bfdda/ImagePicker/3191E62A-A295-4C27-B4D8-08D4785087DA.jpg",
    isFarmer: false,
  });

  useEffect(() => {
    console.log(updatedConsumer.isFarmer);
    console.log(navContinue);
    if (navContinue) 
    {
      if (updatedConsumer.isFarmer) {
        navigation.navigate("ProfilefillFarmer");
      } 
      else {
        navigation.navigate("Welcome");
      }
    }
  }, [navContinue, updatedConsumer.isFarmer]);

  return (
    <Details
      consumer={updatedConsumer}
      setConsumer={setUpdatedConsumer}
      setNavContinue={setNavContinue}
    />
  );
}
