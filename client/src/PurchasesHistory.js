import React, { useState, useContext, useEffect } from "react";

function PurchasesHistory({goBack}){

  const [filterView, setFilter] = useState('1')

  useEffect( () => {
    fetch(`/purchases/${filterView}`).then((r) => {
      if (r.ok) {
        r.json().then((resp) => console.log(resp));
      }
    });
  }, [filterView])

  return (
    <div>
      <div className="formElement">
        <label>Filter:</label>
        <select value={filterView} onChange={e => setFilter(e.target.value) } >
          <option value="1">Last 5</option>
          <option value="2">Show All</option>
        </select>
      </div>
      <button onClick={() => goBack()}>Go back</button>
    </div>
  )
  
}

export default PurchasesHistory