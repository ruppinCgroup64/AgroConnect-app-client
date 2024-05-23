
//Users management- consumer, farmers, login user

import { useState, createContext } from "react";
import { create, read, update, remove } from "../api";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [consumer, setConsumer] = useState({//פה יהיה ריק, ורק הפונקציות יעדכנו אותו לפי מה שחזר מהשרת
    email: "adi@gmail.com",
    firstName: "עדי",
    lastName: "חדד",
    password: "A123!",
    gender: "נקבה",
    dateOfBirth: "1998/08/30",
    phoneNum: "0501234567",
    address: "בארותיים, הפלג, 200",
    registrationDate:"string",
    profilePic:
      //"https://media.licdn.com/dms/image/D4D03AQHyK_wA-8uPQQ/profile-displayphoto-shrink_400_400/0/1694515692027?e=1719446400&v=beta&t=Zx7LtHdUvy1jbzjYeh1Ji_SsJDSyAYr42ZWarvH9cPk",
    "",
    isFarmer: false,
    latitude: "123",
    longitude:"123",
    confirmPassword: "A123!"//רק לדוגמא
  });
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
  

  async function register(consumer) {
    let res = await create("api/Consumers", consumer);
    if (res) {
      if(res.email==null){
        return false
      }
      else
      {
        setConsumer(res);
        return true;
      }
    }
  else alert("something went wrong");
  }

  async function registerFarm(farm) {
    let res = await create("api/Farms", farm);
    console.log("res farm",res)
    if (res==1) {
      return true
    }
    //setFarm("regist farm",res)
    //   return res.json();}
    else {
      alert("something went wrong");
    }
  }

  async function updateUser(user) {
    let res = await update(`api/Consumers`, user);
    if (res && res.status === 200) {
      setConsumer(res.json());
      return res.json();
    } else {
      return false;
    }
  }
  async function updateFarm(farm) {
    let res = await update(`api/Farms`, farm);
    console.log(res.json())
    if (res && res.status === 200) {
      setFarm(res.json());
      return res.json();
    } else {
      return false;
    }
  }

  async function login(user) {
    let res = await create("api/Consumers/Login", user);
    console.log(res)
    if (res)
      {
        if(res.email==null){
          return false
        }
        else
        {
          setConsumer(res);
          if(res.isFarmer==true){
            let resFarm = await read("api/Farms/"+res.id);
            setFarm(resFarm[0])
          }
          return true;
        }
      }
    else alert("something went wrong");
  }

  

  return (
    <UsersContext.Provider value={{ consumer, setConsumer, farm, setFarm, register, registerFarm, login, updateUser, updateFarm}}>
      {props.children}
    </UsersContext.Provider>
  );
}