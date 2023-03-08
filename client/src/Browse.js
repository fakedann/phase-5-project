import React, { useContext, useState } from "react";
import {MyContext} from "./App"

function Browse(){

  const {user, setUser} = useContext(MyContext)


  return (
    <div>
      {user ? 
      <p>hola {user.fullname}</p> : <p>nada</p>}
    </div>

    
  )
}

export default Browse