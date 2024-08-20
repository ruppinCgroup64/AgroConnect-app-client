//All the Products that are in the system

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";


export const ProductContext = createContext();

export default function ProductContextProvider(props) {
  const [productsByFarm, setProductsByFarm] = useState([]);
  const [productsInPoint, setProductsInPoint] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  async function getProducts() {
    let res = await read("api/products");
    if (res) {
      setAllProducts(res);
      return res
    }
    else alert("something went wrong");
  }

  async function getProductsByFarm(farmID) {
    let res = await read("api/Products/farmer/" + farmID);
    if (res) {
      setProductsByFarm(res)
      return res;
    }
    else alert("something went wrong");
  }

  async function getProductsInPoint(point) {
    try {
        let newProducts = [];
        let res = await read("api/Products/ProductsDetailsSalePoint/" + point);
        let res2 = await read("api/FarmProductsInPoint/" + point);

        if (Array.isArray(res) && Array.isArray(res2)) {
            for (let i = 0; i < res.length; i++) {
                for (let j = 0; j < res2.length; j++) {
                    if (res[i].id === res2[j].productInFarmNum) {
                        newProducts.push({
                            id: res[i].id,
                            pic: res[i].pic,
                            name: res[i].name,
                            amount: res2[j].productAmount,
                            price: res2[j].unitPrice
                        });
                    }
                }
            }
        }
        setProductsInPoint(newProducts);
        return newProducts;
    } catch (error) {
        console.error("Error in getProductsInPoint:", error);
        setProductsInPoint([]); // איפוס state במקרה של שגיאה
    }
}//getProductsInPoint

  async function getProductAveragePrice(productID) {
    let res = await read("api/products");
    if (res)
      return res
    else alert("something went wrong");
  }

  async function createProductInPoint(product) {
    let res = await create("api/FarmProductsInPoint", product);
    if (res)
      return res
    else alert("something went wrong");
  }

  return (
    <ProductContext.Provider value={{ productsByFarm, getProductAveragePrice, getProducts, getProductsByFarm, createProductInPoint, getProductsInPoint, productsInPoint, allProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
}