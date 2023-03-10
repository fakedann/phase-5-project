import React, { useContext, useState, useEffect } from "react";
import FilmCardCreator from "./FilmCardCreator";
import {MyContext} from "./App"

function Browse(){

  const {user, setUser} = useContext(MyContext)
  const [films, setFilms] = useState(null)

  useEffect(() => {
    fetch("/lastfive").then((r) => {
      if (r.ok) {
        r.json().then((resp) => setFilms(resp));
      }
    });

  }, []);

  return (
    <div>
      {films ? <div className="filmContainer">{ films.map( filmObj => FilmCardCreator(filmObj))}</div>: <p>nada</p> }
    </div>

    
  )
}

export default Browse