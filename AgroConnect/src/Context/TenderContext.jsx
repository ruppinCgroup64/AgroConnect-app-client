//products in the system

import { useState, createContext } from "react";
import { create, update } from "../api";

export const TenderContext = createContext();

export default function TenderContextProvider(props) {
  const [tender, setTender] = useState({})

  async function createTender(tender) {
    let res = await create("api/tender", tender);
    if (res.status)
      alert("user created"); //נחזיר ערך מתאים למי שקרא על מנת לפעול בהתאם
    else alert("something went wrong");
  }

  async function updateTender(tenderId, tender) {
    let res = await update(`api/user/${userId}`, user);
    if (res && res.status === 200) {
      // Assuming 200 is the status code for a successful update
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  }

  async function get() {
    let res = await read("api/products");
    if (res.status)
      setProducts(res.json())
    else alert("something went wrong");
  }

  return (
    <TenderContext.Provider value={{ tender, setTender, createTender }}>
      {props.children}
    </TenderContext.Provider>
  );
}