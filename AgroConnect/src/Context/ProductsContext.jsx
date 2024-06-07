//All the Products that are in the system

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";


export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [productsByFarm, setProductsByFarm] = useState([]);

  async function getProducts() {
    let res = await read("api/products");
    if (res)
      return res
    else alert("something went wrong");
  }

  async function getProductsByFarm(farmID) {
    let res = await read("api/Products/farmer/"+farmID);
    if (res)
      {setProductsByFarm(res)
      return res;}
    else alert("something went wrong");
  }

  async function getProductAveragePrice(productID) {
    let res = await read("api/products");
    if (res)
      return res
    else alert("something went wrong");
  }

  return (
    <ProductContext.Provider value={{ productsByFarm, getProductAveragePrice, getProducts,getProductsByFarm }}>
      {props.children}
    </ProductContext.Provider>
  );
}