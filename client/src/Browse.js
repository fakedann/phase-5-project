import React, { useContext, useState, useEffect } from "react";
import FilmCardCreator from "./FilmCardCreator";
import {MyContext} from "./App"

function Browse(){

  const {user, setUser} = useContext(MyContext)
  const [films, setFilms] = useState(null)
  const [filterView, setView] = useState('1')

  useEffect(() => {
    console.log('inside')
    fetch(`/filterbrowse/${filterView}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setFilms(resp));
      }
    });

  }, [filterView]);

  console.log(filterView)

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

    </div>

    
  )
}

export default Browse