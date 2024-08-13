//All the Orders that are in the system

import { useState, createContext } from "react";
import { create } from "../api";
import { read } from "../api";


export const OrderContext = createContext();

export default function OrderContextProvider(props) {
  const [order, setOrder] = useState();
  const [orders, setOrders] = useState();
  const [ordersInPoint, setOdersInPoint] = useState();
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

  async function getOrdersByConsumer(cID) {
    let res = await read("Orders/" + cID);
    if (res) {
      setOrder(res);
      return res;
    }
    else alert("something went wrong");
  }

  async function getOrdersInPoint() {
    let res = await read("OrdersInPoint/");
    if (res) {
      setOrderInPoint(res);
      return res;
    }
    else alert("something went wrong");
  }

  return (
    <OrderContext.Provider value={{ order, setOrder, createOrder, createOrderInPoint, orderInPoint, getOrdersByConsumer, orders, getOrders, ordersInPoint, getOrdersInPoint }}>
      {props.children}
    </OrderContext.Provider>
  );
}//OrderContextProvider