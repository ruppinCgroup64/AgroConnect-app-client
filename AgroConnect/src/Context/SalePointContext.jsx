//products in the system

import { useState, createContext } from "react";
import { create, update } from "../api";

export const SalePointContext = createContext();

export default function SalePointContextProvider(props) {
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

  async function getSalePoint() {
    let res = await read("api/products");
    if (res.status)
      setProducts(res.json())
    else alert("something went wrong");
  }

  return (
    <SalePointContext.Provider value={{ createSalePoint, updateSalePoint, getSalePoint }}>
      {props.children}
    </SalePointContext.Provider>
  );
}