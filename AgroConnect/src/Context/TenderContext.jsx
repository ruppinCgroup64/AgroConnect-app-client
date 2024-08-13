import { createContext, useState } from 'react';
import { create, read, update } from '../api';


export const TenderContext = createContext();

export default function TenderContextProvider(props) {
  const [tender, setTender] = useState({});
  const [Tenders, setTenders] = useState([]);
  const [TendersByFarm, setTendersByFarm] = useState([]);
  const [TenderBidsFarm, setTenderBidsFarm] = useState([]);

  async function createTender(tender) {
    let res = await create("api/Tenders", tender);
    if (res!={}) {
      console.log("tender created");
      return res;
    }
    else alert("something went wrong");
  }

  async function createBid(bid) {
    let res = await create("api/Bids", bid);
    if (res!={}) {
      console.log("bid created");
      return res;
    }
    else alert("something went wrong");
  }


  async function updateTender(tenderId, tender) {
    let res = await update(`api/user/${tenderId}`, tender);
    if (res && res.status === 200) {
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  }

  async function getTenders() {
    let res = await read("api/Tenders");
    if (res) {setTenders(res); return res}
    else alert("something went wrong");
    console.log("Tenders: ", res);
  }

  async function getTendersByFarm(farmID) {
    let res = await read(`api/Tenders/farm/${farmID}`,farmID);
    if (res) {setTendersByFarm(res);
      return res;
    }
    else alert("something went wrong");
    console.log("TendersByFarm: ", res);
  }

  async function getTendersBidsFarmer(tenderId) {
    console.log('tenderId',tenderId)
    let res = await read(`api/Tenders/BidsDetails/${tenderId}`,tenderId);
    if (res) {setTenderBidsFarm(res);
      return res;
    }
    else alert("something went wrong");
    console.log("bids: ", res);
  }


  return (
    <TenderContext.Provider value={{createBid,getTendersBidsFarmer,TenderBidsFarm,getTendersByFarm, tender, setTender, createTender, updateTender, getTenders, Tenders }}>
      {props.children}
    </TenderContext.Provider>
  );
}
