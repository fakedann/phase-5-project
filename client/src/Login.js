import React, { useContext, useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {MyContext} from "./App"

function Login() {

  const {user, setUser, setCart} = useContext(MyContext)
  const [showLogin, setShowLogin] = useState(true);
  console.log(user)
  

  if (user) return (
    <div className="welcomeCard">
      <img src={user.image_url} alt="Waiting" />
      <h1>{user.fullname}</h1>
      <p className="title">{user.address}</p>
      <p>{user.email}</p>
      <p><button id="welcomeBut" onClick={handleLogoutClick}>Logout</button></p>
    </div>
  );


  function handleLogoutClick() {

    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        localStorage.removeItem("cart")
        setCart([])
        setUser(null);
        
      }
    });
  }

  return (
    
      <div className="mainBox">
          {showLogin ? (
          <>
            <p>If you already have an account, please sign in.</p>
            <LoginForm />
            <p className="bottomP">
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
              <button color="secondary" onClick={() => setUser('daniel')}>
                Testuser
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm />
            <p className="bottomP">
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </div>
      
   
  );
}


export default Login;