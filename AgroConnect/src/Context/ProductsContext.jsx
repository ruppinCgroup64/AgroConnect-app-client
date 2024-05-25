//All the Products that are in the system

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";


export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "עגבנייה",
      url: "https://st1.foodsd.co.il/Images/Products/large/hagiSJ2GI3.jpg"
    },
    {
      id: 1,
      name: "מלפפון",
      url: "https://www.shefab.co.il/files/products/product71_image1_2020-08-30_17-35-56.jpg"
    }]);

  async function getProducts() {
    let res = await read("api/products");
    if (res.status)
      setProducts(res.json())
    else alert("something went wrong");
  }

  async function getProductsByFarm(farmID) {
    let res = await read("api/Products/"+farmID);
    if (res)
      return res;
    else alert("something went wrong");
  }

  async function getProductAveragePrice(productID) {
    let res = await read("api/products");
    if (res.status)
      setProducts(res.json())
    else alert("something went wrong");
  }

  return (
    <ProductContext.Provider value={{ products, getProductAveragePrice, getProducts, setProducts,getProductsByFarm }}>
      {props.children}
    </ProductContext.Provider>
  );
}