import { createContext, useState } from 'react';
import { create, read, update } from '../api';

export const TenderContext = createContext();

export default function TenderContextProvider(props) {
  const [tender, setTender] = useState({});
  const [Tenders, setTenders] = useState([]);

  async function createTender(tender) {
    let res = await create("api/tender", tender);
    if (res.status) alert("user created");
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
    if (res) setTenders(res);
    else alert("something went wrong");
    console.log("Tenders: ", res);
  }

  return (
    <TenderContext.Provider value={{ tender, setTender, createTender, updateTender, getTenders, Tenders }}>
      {props.children}
    </TenderContext.Provider>
  );
}
