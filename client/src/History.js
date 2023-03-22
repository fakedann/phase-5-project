import React, { useState, useContext, useEffect } from "react";


function History(){

  const [copies, setCopies] = useState([])
  const created = []

  useEffect( () => {
    fetch(`/copies`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(resp));
      }
    });
  }, [])
  

  return (
    <div>
      {/* {copies.map( filmObj => {
        if(filmObj.id)
      })} */}
    </div>
  )
}

export default History