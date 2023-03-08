import './App.css';
import {Route, Routes} from "react-router-dom"
import React, { useEffect, useState, createContext } from "react";
import Login from './Login';
import Browse from './Browse';

export const MyContext = createContext()

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('hola')
  const value = {
    theme,
    setTheme,
    user,
    setUser
  }

  console.log(user)
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((resp) => setUser(resp));
      }
    });

  }, []);


  return (
    <MyContext.Provider value={value}>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/test" element={<Browse />}/>
        </Routes>
    </div>
  </MyContext.Provider>
  );
}

export default App;
