import React, { useContext, useState, useEffect } from "react";
import FilmCardCreator from "./FilmCardCreator";
import {MyContext} from "./App"

function Browse(){

  const {films, setFilms, cart, user} = useContext(MyContext)
  const [filterView, setView] = useState('1')
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`/filterbrowse/${filterView}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setFilms(resp));
      }
    });

  }, [filterView]);

  function testCart(){
    
    fetch("/testcart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({cart: cart}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(resp));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  if (!user) return <p>Please, log in first.</p>

  return (
    <div>
      <div className="formElement">
        <label>Filter:</label>
        <select value={filterView} onChange={e => setView(e.target.value) } >
          <option value="1">Last 5</option>
          <option value="2">Low Ratings (1-3)</option>
          <option value="3">High Ratings (4-5)</option>
          <option value="4">Show All</option>
        </select>
      </div>
      {films ? <div className="filmContainer">{ films.map( filmObj => FilmCardCreator(filmObj))}</div>: <p>nada</p> }
      <button onClick={testCart}>CHECK CART</button>

    </div>

    
  )
}

export default Browse