import React, { useState, useContext, useEffect } from "react";
import PurchasesHistory from "./PurchasesHistory";


function History(){

  const [view, setView] = useState('')


  if(view === 'purchases'){
    return <PurchasesHistory goBack={goBack}/>
  }else{
    console.log('ratings maybe')
  }


  function goBack(){
    setView('')
  }

  return (
    <div>
      <button onClick={() => setView('purchases')}>Purchases</button>
      <button onClick={() => setView('ratings')}>Ratings</button>
      <p>Plese, select if you would like to see your purchases or ratings history.</p>
    </div>
  )
}

export default History