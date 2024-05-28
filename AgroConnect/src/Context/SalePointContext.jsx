//products in the system

import { useState, createContext } from "react";
import { create, read, update, remove } from "../api";

export const SalePointContext = createContext();

export default function SalePointContextProvider(props) {
  const [salePoints, setSalePoints] = useState({})
  const [salePoint, setSalePoint] = useState({})

  async function createSalePoint(point) {
    let res = await create("api/SalePoints", point);
    if (res)
      return res
    else alert("something went wrong");
  }

  async function updateSalePoint(pointID, point) {
    let res = await update(`api/SalePoints/${pointID}`, point);
    if (res) {
        return res
    } else {
      alert("Failed to update user");
    }
  }

  async function getSalePoints() {
    let res = await read("api/SalePoints");
    if (res)
      setSalePoints(res)
    else alert("something went wrong");
  }

  return (
    <SalePointContext.Provider value={{ createSalePoint, updateSalePoint, getSalePoints, salePoints, setSalePoints, salePoint, setSalePoint }}>
      {props.children}
    </SalePointContext.Provider>
  );
}