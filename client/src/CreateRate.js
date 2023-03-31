import React, { useState, useEffect } from "react";

function CreateRate( {film, goBack} ){
  

  useEffect( () => {
    fetch(`/rates/${film.id}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setFilmRates(resp));
      }
    });
  }, [])


  const [rate, setRate] = useState({
    score: '1',
    comments: '',
    filmid: film.id
  });
  const [errors, setErrors] = useState([]);
  const [filmRates, setFilmRates] = useState([])
  const [succes, setSuccess] = useState(undefined) 

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
        r.json().then((resp) => setSuccess(resp));
      } else {
        r.json().then((err) => setErrors([...errors, err.errors]));
      }
    });
  }

  function back(){
    goBack()
  }

  if(succes){
    return (
      <div>
        <p>Your rating has been succesfully created!</p>
        <button onClick={back}>OK</button>
      </div>
    )
  }

  return (
    <div className="createDiv">

      <div className="welcomeCard">
        <img src={film.poster} alt="Waiting" />
        <h1>{film.title}</h1>
        <p className="title">{film.director}</p>
        <p>{film.year}</p>
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
       <p>{errors[0]}</p>
       <p>Last 5 ratings for this film:</p>
       <div id="rates">
       { filmRates.map( rateObj => 
         <div key={rateObj.id} className="cardRates">
            <h4>By: {rateObj.user.fullname}</h4>
            <p>- {rateObj.comments}</p>
            <h4>Score: {rateObj.score}</h4>
         </div>
       )}
        
       </div>
    </div>
  )
}

export default CreateRate