import React, { useState} from "react";


function UpdateRate({rate, goBack}){

  const [updatedRate, setUpdate] = useState({
    score: '1',
    comments: '',
    id: rate.id
  });
  const [errors, setErrors] = useState(['']);
  const [submmited, setSubmitted] = useState(false)
  console.log(rate)
 

  function handleSubmit(e){
    e.preventDefault()
    
    if(updatedRate.comments === rate.comments && parseInt(updatedRate.score) === rate.score ){
      setErrors(['Your new rating is the same as the one you previously submitted. Please change at least one of the attributes.'])
    }else{
      fetch(`/updaterate`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRate),
      }).then((r) => {
        if (r.ok) {
          r.json().then( () => setSubmitted(true));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

  }


  if(submmited){
    return <div>
      <p>You have succesfully updated your rating!</p>
      <button onClick={()=> goBack('')}>Back to History</button>
    </div>
  }
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label>New comment:</label>
          <input
            type="text"
            name="comments"
            onChange={e => setUpdate({...updatedRate, comments: e.target.value})}
            value={updatedRate.comments}
          />
          </div>
          <div className="formElement">
            <label>New score:</label>
            <select value={updatedRate.score} onChange={e => setUpdate({...updatedRate, score: e.target.value})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
        <button id="submitReview" type="submit">Submit</button>
       </form>
       {errors}
    </div>
  )
}

export default UpdateRate