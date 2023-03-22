import React, { useState, useContext, useEffect } from "react";
import UpdateRate from "./UpdateRate";


function History(){

  const [copies, setCopies] = useState([])
  const [execOperation, setOperation] = useState({
    operation: '',
    film: undefined
  })
  console.log(copies)

  useEffect( () => {
    fetch(`/copies`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setCopies(resp));
      }
    });
    
  }, [execOperation])

  if(execOperation.operation === 'update'){
    console.log('updating')
    console.log(execOperation)
    return <UpdateRate rate={execOperation.film} goBack={setOperation}/>
  }else if(execOperation === "delete"){
    console.log('deleting')
  }
  

  return (
    <div>
      {copies.map( filmObj => <div key={filmObj.id} className="historyCard">
        <img src={filmObj.poster} alt="Waiting" />
        <h1>{filmObj.title}</h1>
        <p className="title">{filmObj.director}</p>
        <p># of copies bought: {filmObj.copias}</p>
        {filmObj.rating.length > 0 ? <div>
          <p>Your rating:</p>
          <p>{filmObj.rating[0].comments}</p>
          <h4>Score: {filmObj.rating[0].score}</h4>
          <button onClick={() => setOperation({operation: 'update', film: filmObj.rating[0]})}>Change</button>
          <button onClick={() => setOperation({operation: 'delete', film: filmObj.rating[0]})}>Delete</button>
        </div>: null}
        
      </div>)}
    </div>
  )
}

export default History