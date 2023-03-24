import React, { useState, useContext } from "react";
import CreateRate from "./CreateRate";
import {MyContext} from "./App"

function LeaveReview(){

  const {user} = useContext(MyContext)
  const [search, setSearch] = useState('')
  const [film, setFilm] = useState(undefined)
  const [errors, setErrors] = useState(['']);

  function handleSearch(e){
    e.preventDefault()
    console.log(search)
    fetch(`/searchfilm/${search}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setFilm(resp));
      }else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function goBack(){
    setSearch('')
    setFilm(undefined)
  }

  if(!user) return <p>Please, log in first.</p>

  if (film){
    return <CreateRate film={film} goBack={goBack}/>
  }


  return (
    <div className="reviewDiv">
      <form onSubmit={handleSearch}>
        <div className="formElement">
          <label>Look for a film:</label>
          <input
            type="text"
            name="search"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          </div>
        <button id="submitReview" type="submit">Submit</button>
       </form>
        {errors}
    </div>
  )
}

export default LeaveReview