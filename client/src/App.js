import './App.css';
import {Route, Routes} from "react-router-dom"
import React, { useEffect, useState, createContext } from "react";
import Login from './Login';
import Browse from './Browse';
import Cart from './Cart';

export const MyContext = createContext()

function App() {
  const [user, setUser] = useState(null);
  const [films, setFilms] = useState([])
  const [cart, setCart] = useState([])
  let localCart = localStorage.getItem("cart")
  const globalValues = {
    user,
    setUser,
    cart,
    setCart,
    films,
    setFilms
  }

  console.log(user)
  useEffect(() => {
    localCart = JSON.parse(localCart);
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
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/browse" element={<Browse />}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  </MyContext.Provider>
  );
}

export default App;
