import React, { useState, useContext, useEffect } from "react";
import DeleteRate from "./DeleteRate";
import UpdateRate from "./UpdateRate";
import {MyContext} from "./App"


function History(){

  const {user} = useContext(MyContext)
  const [copies, setCopies] = useState([])
  const [errors, setErrors] = useState([]);
  const [execOperation, setOperation] = useState({
    operation: '',
    film: undefined
  })
  console.log(copies)

  useEffect( () => {
    fetch(`/copies`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setCopies(resp));
      } else{
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }, [execOperation])

  if(!user) return <p>Please, log in first.</p>

  if(execOperation.operation === 'update'){
    return <UpdateRate rate={execOperation.film} goBack={setOperation}/>
  }else if(execOperation.operation === "delete"){
    let film = copies.find( filmObj => {
      if(filmObj.id === execOperation.film.film_id){
        return filmObj
      }else{
        return null
      }
    })

    return <DeleteRate rate={execOperation.film} goBack={setOperation} title={film.title}/>
  }

  if(copies.length === 0) return <p>Nothing to show so far. Start shopping now!</p>
  

  return (
    <div>
      {errors}
      {copies.map( filmObj => <div key={filmObj.id} className="historyCard">
        <img src={filmObj.poster} alt="Waiting" />
        <h1>{filmObj.title}</h1>
        <p className="title">{filmObj.director}</p>
        <p># of copies bought: {filmObj.copias}</p>
        {filmObj.rating.length > 0 ? <div>
          <p>Your rating:</p>
          <p>{filmObj.rating[0].comments}</p>
          <h4>Score: {filmObj.rating[0].score}</h4>
          <button onClick={() => setOperation({operation: 'update', film: filmObj.rating[0]})}>Change Rating</button>
          <button onClick={() => setOperation({operation: 'delete', film: filmObj.rating[0]})}>Delete Rating</button>
        </div>: null}
        
      </div>)}
    </div>
  )
}

export default History