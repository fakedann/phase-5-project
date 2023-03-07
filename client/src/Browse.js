import React, { useContext, useState } from "react";
import {MyContext} from "./App"

function Browse(){

  const {user, setUser} = useContext(MyContext)


  return (
    <div>
      <button color="secondary" onClick={() => setUser('jose')}>
                Testuser
      </button>
      <p>hola {user}</p>
    </div>

    
  )
}

export default Browse