//Users management- consumer, farmers, login user

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [consumer, setConsumer] = useState({//פה יהיה ריק, ורק הפונקציות יעדכנו אותו לפי מה שחזר מהשרת
    firstName: "עדי",
    lastName: "חדד",
    dateOfBirth: "30/08/1998",
    gender: "נקבה",
    email: "adi@gmail.com",
    phoneNum: "0501234567",
    address: "בארותיים, הפלג, 200",
    latitude: "123",
    longitude: "123",
    password: "1234",
    confirmPassword: "1234",
    profilePic: "https://cdn.dribbble.com/users/146798/screenshots/6194594/media/24a15804b44e8fea542060fad3f47b4a.jpg?resize=400x300&vertical=center",
    isFarmer: false,
  });
  const [farm, setFarm] = useState({
    farmName: "המשק",
    address: "ויתקין, החרוב, 1",
    socialNetworkLink: "https://www.facebook.com/HAMESHEK.Hod.Hasharon/",
    mainPic:
      "file:///var/mobile/Containers/Data/Application/DA33310A-7189-40D0-AAD7-855F44CD2353/Library/Caches/ExponentExperienceData/@anonymous/AgroConnect-a9363ae1-df3b-4be5-aa0a-fec0396bfdda/ImagePicker/3191E62A-A295-4C27-B4D8-08D4785087DA.jpg",
    farmerID: "meshek@gmai.com"//פה יהיה האימייל המזהה
  });

  async function register(user) {
    let res = await create("api/user", user);
    if (res.status)
      alert("user created"); //נחזיר ערך מתאים למי שקרא על מנת לפעול בהתאם
    else alert("something went wrong");
  }

  async function updateUser(userId, user) {
    let res = await update(`api/user/${userId}`, user);
    if (res && res.status === 200) {
      // Assuming 200 is the status code for a successful update
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  }

  async function login(user) {
    let res = await create("api/user", user);
    if (res.status)
      alert("user loged"); //נחזיר ערך מתאים למי שקרא על מנת לפעול בהתאם
    else alert("something went wrong");
  }

  return (
    <UsersContext.Provider value={{ consumer, setConsumer, farm, setFarm, register, updateUser }}>
      {props.children}
    </UsersContext.Provider>
  );
}