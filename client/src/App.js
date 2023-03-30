import './App.css';
import {Route, Routes} from "react-router-dom"
import React, { useEffect, useState, createContext } from "react";
import Login from './Login';
import Browse from './Browse';
import Cart from './Cart';
import History from './History';
import LeaveReview from './LeaveReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export const MyContext = createContext()

function App() {
  const [user, setUser] = useState(undefined);
  const [cart, setCart] = useState([])
  let localCart = JSON.parse(localStorage.getItem("cart"))
  const globalValues = {
    user,
    setUser,
    cart,
    setCart,
  }

  useEffect(() => {
    if (localCart) setCart(localCart)

    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((resp) => setUser(resp));
      }
    });

  }, []);


  return (
    <MyContext.Provider value={globalValues}>
      <div className="app">
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/browse" element={<Browse />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/history" element={<History />}/>
          <Route exact path="/rating" element={<LeaveReview />}/>
        </Routes>
        <ToastContainer />
      </PayPalScriptProvider>
    </div>
  </MyContext.Provider>
  );
}

export default React.memo(App);
