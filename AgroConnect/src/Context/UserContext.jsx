
//Users management- consumer, farmers, login user

import { useState, createContext } from "react";
import { create, read, update, remove } from "../api";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [consumer, setConsumer] = useState(null
  //   {//פה יהיה ריק, ורק הפונקציות יעדכנו אותו לפי מה שחזר מהשרת
  //   email: "adi@gmail.com",
  //   firstName: "עדי",
  //   lastName: "חדד",
  //   password: "A123!",
  //   gender: "נקבה",
  //   dateOfBirth: "1998/08/30",
  //   phoneNum: "0501234567",
  //   address: "בארותיים, הפלג, 200",
  //   registrationDate:"string",
  //   profilePic:
  //     //"https://media.licdn.com/dms/image/D4D03AQHyK_wA-8uPQQ/profile-displayphoto-shrink_400_400/0/1694515692027?e=1719446400&v=beta&t=Zx7LtHdUvy1jbzjYeh1Ji_SsJDSyAYr42ZWarvH9cPk",
  //   "",
  //   isFarmer: false,
  //   latitude: "123",
  //   longitude:"123",
  //   confirmPassword: "A123!"//רק לדוגמא
  // }
);
  const [farm, setFarm] = useState(null
    //{
    // farmName: "המשק",
    // address: "ויתקין, החרוב, 1",
    // socialNetworkLink: "https://www.facebook.com/HAMESHEK.Hod.Hasharon/",
    // mainPic:
    //   "https://scontent.ftlv20-2.fna.fbcdn.net/v/t39.30808-1/292727236_473168214810401_4713296776012036218_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gaNQOR2nwlEAb5opWTS&_nc_ht=scontent.ftlv20-2.fna&oh=00_AfAqXpY2-in1gXg6IUoP9_ER2J6s9aN1lbLLDEXun_rRYQ&oe=662ABBE7",
    // farmerID: "meshek@gmai.com"//פה יהיה האימייל המזהה
  //}
);
  

  async function register(user) {
    let res = await create("api/Consumers", user);
    if (res) {
      return res;
    }
  else alert("something went wrong");
  }

  async function registerFarm(farm) {
    let res = await create("api/Farms", farm);
    if (res==1) {
      return true
    }
    else {
      alert("something went wrong");
    }
  }

  async function updateUser(user) {
    let res = await update(`api/Consumers`, user);
    if (res) {
      setConsumer(res);
      console.log("update", res)
      return res;
    } 
    else {
      alert("something went wrong");
    }
  }
  async function updateFarm(f) {
    let res = await update(`api/Farms`, f);
    if (res && res.status === 200) {
      console.log(res)
      setFarm(res);
      return res;
    } else {
      return false;
    }
  }

  async function login(user) {
    let res = await create("api/Consumers/Login", user);
    console.log("login",res)
    if (res)
      {
        if(res.email==null){
          return false
        }
        else
        {
          setConsumer(res);
          if(res.isFarmer==true){
            let resFarm = await read("api/Farms/"+res["id"]);
            setFarm(resFarm[0]);
          }
          return true;
        }
      }
    else alert("something went wrong");
  }//login
  

  return (
    <UsersContext.Provider value={{ consumer, setConsumer, farm, setFarm, register, registerFarm, login, updateUser, updateFarm}}>
      {props.children}
    </UsersContext.Provider>
  );
}