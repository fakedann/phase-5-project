import React, { useState, createContext } from "react";

function CreateRate( film ){
  
  const [rate, setRate] = useState({
    score: '1',
    comments: '',
    filmid: film.film.id
  });
  const [errors, setErrors] = useState(['']);


  function handleSubmit(e){
    e.preventDefault()
    fetch("/createrate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rate),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(resp));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return (
    <div className="createDiv">

      <div className="welcomeCard">
        <img src={film.film.poster} alt="Waiting" />
        <h1>{film.film.title}</h1>
        <p className="title">{film.film.director}</p>
        <p>{film.film.year}</p>
      </div>



      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>Comments:</label>
          <input
            type="text"
            name="comments"
            onChange={e => setRate({...rate, comments: e.target.value})}
            value={rate.comments}
          />
          </div>
          <div className="formElement">
            <label>Score:</label>
            <select value={rate.score} onChange={e => setRate({...rate, score: e.target.value})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
        <button id="submitReview" type="submit">Submit</button>
       </form>
    </div>
  )
}

export default CreateRate