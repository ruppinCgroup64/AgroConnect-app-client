//All the Orders that are in the system

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";


export const OrderContext = createContext();

export default function OrderContextProvider(props) {
  const [order, setOrder] = useState();
  const [orders, setOrders] = useState();
  const [ordersInPoint, setOrdersInPoint] = useState();
  const [orderInPoint, setOrderInPoint] = useState();

  async function getOrders() {
    let res = await read("api/orders");
    if (res) {
      setOrders(res);
      return res
    }
    else alert("something went wrong");
  }

  async function createOrder(o) {
    let res = await create("api/Orders", o);
    if (res) {
      setOrder(o);
      return res;
    }
    else alert("something went wrong");
  }//createOrder

  async function createOrderInPoint(o) {
    let res = await create("api/OrdersInPoint", o);
    if (res) {
      setOrderInPoint(res);
      return res;
    }
    else alert("something went wrong");
  }//createOrderInPoint

  async function getOrderInPoint(o) {
    try {
      let res = await create("api/OrdersInPoint/ordersInPointDetails", o);

      // בדיקה אם הבקשה לא הצליחה או אם res הוא null או undefined
      if (!res || !res.status) {
        console.log("No data found or an error occurred.");
        return -1;
      }//if

      // אם הבקשה הצליחה ויש נתונים
      setOrderInPoint(res);
      return res;
    } catch (error) {
      // טיפול בשגיאה כאן כדי למנוע מהאפליקציה להקפיץ שגיאה
      console.error("An error occurred:", error);
      return -1;
    }//catch
  }//getOrderInPoint


  async function getOrdersByConsumer(cID) {
    let res = await read("Orders/" + cID);
    if (res) {
      setOrders(res);
      return res;
    }
    else alert("something went wrong");
  }

  async function getOrdersInPoint() {
    let res = await read("OrdersInPoint/");
    if (res) {
      setOrdersInPoint(res);
      return res;
    }
    else alert("something went wrong");
  }

  async function getOrdersConsumerView(id) {
    let res = await read("orders/ConsumerView/" + id);
    if (res) {
      setOrders(res);
      return res;
    }
    else alert("something went wrong");
  }

  async function getOrdersFarmerView(id) {
    let res = await read("orders/ConsumerView/" + id);
    if (res) {
      setOrders(res);
      return res;
    }
    else alert("something went wrong");
  }

  return (
    <OrderContext.Provider value={{ order, setOrder, createOrder, createOrderInPoint, orderInPoint, getOrdersByConsumer, orders, getOrders, ordersInPoint, getOrdersInPoint, getOrderInPoint, getOrdersConsumerView, getOrdersFarmerView }}>
      {props.children}
    </OrderContext.Provider>
  );
}//OrderContextProvider