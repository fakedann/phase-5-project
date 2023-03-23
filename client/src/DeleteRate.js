import React, { useState} from "react";


function DeleteRate({rate, goBack, title}){

  const [deleted, setDeleted] = useState(false)

  function confirmDelete(){
    fetch(`/rate/${rate.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setDeleted(true)
      }
    });
  }
  
  if(deleted){
    return <div>
      <p>You have succesfully deleted your rating!</p>
      <button onClick={()=> goBack('')}>Back to History</button>
    </div>
  }
  

  return (
    <div>
      <p>Are you sure you want to delete your rating for {title}?</p>
      <button onClick={ confirmDelete}>Confirm Delete</button>
      <button onClick={ () => goBack('')}>Cancel</button>
       {/* {errors} */}
    </div>
  )
}

export default DeleteRate