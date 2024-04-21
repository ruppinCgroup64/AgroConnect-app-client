
//users management- consumer, farmers, login user

import { useState, createContext } from "react";
import { create } from "../api";

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
    longitude:"123",
    password: "1234",
    confirmPassword: "1234",
    profilePic:
      "https://scontent.ftlv20-1.fna.fbcdn.net/v/t1.6435-1/83893614_3381060301908235_6597994632028618752_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jXYPO1-4jx4Ab4yBNsH&_nc_ht=scontent.ftlv20-1.fna&oh=00_AfAban614EALrQ7ciV4Iskti2bMJXyrcOaZj0uBP4RjpXA&oe=664C3833",
    isFarmer: false,
  });
  const [farm, setFarm] = useState({
    farmName: "המשק",
    address: "ויתקין, החרוב, 1",
    socialNetworkLink: "https://www.facebook.com/HAMESHEK.Hod.Hasharon/",
    mainPic:
      "https://scontent.ftlv20-2.fna.fbcdn.net/v/t39.30808-1/292727236_473168214810401_4713296776012036218_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gaNQOR2nwlEAb5opWTS&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfAqXpY2-in1gXg6IUoP9_ER2J6s9aN1lbLLDEXun_rRYQ&oe=662ABBE7",
    farmerID:"meshek@gmai.com"//פה יהיה האימייל המזהה
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