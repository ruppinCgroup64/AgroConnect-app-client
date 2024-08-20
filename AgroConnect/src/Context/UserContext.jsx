
//Users management- consumer, farmers, login user

import { useState, createContext, useEffect } from "react";
import { create, read, update, remove } from "../api";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { navigateLogin } from "../screens/Login";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [consumer, setConsumer] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [farm, setFarm] = useState(null);
  const [allFarms, setAllFarms] = useState(null);
  const [farmPoint, setFarmPoint] = useState(null);
  const [allConsumers, setAllConsumers] = useState(null);


  async function register(user) {
    let res = await create("api/Consumers", user);
    if (res) {
      return res;
    }
    else alert("something went wrong");
  }

  async function registerFarm(farm) {
    let res = await create("api/Farms", farm);
    if (res) {
      return res
    }
    else {
      alert("something went wrong");
    }
  }

  async function updateUser(user) {
    let res = await update(`api/Consumers`, user);
    if (res) {
      setConsumer(res);
      return res;
    }
    else {
      alert("something went wrong");
    }
  }
  async function updateFarm(f) {
    let res = await update(`api/Farms`, f);
    if (res) {
      console.log("upp far", res)
      setFarm(res);
      return res;
    } else {
      alert("something went wrong");
    }
  }

  async function login(user) {
    let res = await create("api/Consumers/Login", user);
    if (res) {
      if (res.email == null) {
        return 0;
      }
      else {
        setConsumer(res);
        if (res.isFarmer == true) {
          let resFarm = await read("api/Farms/farmer/" + res["id"]);
          setFarm(resFarm[0]);
          return 2;
        }
        return 1;
      }
    }
    else alert("something went wrong");
  }//login

  async function getFarmBySalePoint(pointID) {
    let resFarm = await read("api/Farms/salePoint/" + pointID);
    setFarmPoint(resFarm);
    return 2;
  }

  async function getAllConsumers() {
    let res = await read("api/Consumers");
    setAllConsumers(res);
    return 2;
  }

  async function getAllFarms() {
    let res = await read("api/Farms");
    setAllFarms(res);
    return 2;
  }

  async function getAlerts(consumerId) {
    let res = await read(`api/Tenders/alerts/${consumerId}`);
    if (res) {
      setAlerts(res);
      return res
    }
    else alert("something went wrong");
    console.log("Alerts: ", res);
  }

  async function getFarms() {
    let res = await read(`api/Farms`);
    if (res) {
      setAllFarms(res)
      return res
    }
    else alert("something went wrong");
    console.log("Farms: ", res);
  }

  return (
    <UsersContext.Provider value={{ alerts, getAlerts, getFarms, consumer, setConsumer, farm, setFarm, register, registerFarm, login, updateUser, updateFarm, getFarmBySalePoint, farmPoint, getAllConsumers, allConsumers, getAllFarms, allFarms }}>
      {props.children}
    </UsersContext.Provider>
  );
}