import React, { useState } from "react";

function FilmCardCreator( film ){


  return (
    <div id="container" key={film.id}>	
	
  
    <div className="product-details">
      
      
    <h1>{film.title}</h1>
  
      <p className="information">{film.description}</p>
  
      
      
  
  <div className="control">
    
 
    <button className="btn">
 
     <span className="price">${film.price}</span>
  
     <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
 
     <span className="buy">Buy Now</span>
   </button>
   
    
  </div>
        
  </div>
    
  
    
  <div className="product-image">
    
    <img src={film.poster} alt="Loading.."/>
    
  
  <div className="info">
    <h2>Details:</h2>
    <ul>
      <li><strong>Director </strong>{film.director}</li>
      <li><strong>Year: </strong>{film.year}</li>
      <li><strong>Genre: </strong>{film.genre}</li>
      <li><strong>Runtime: </strong>{film.runtime} Mins</li>
    </ul>
  </div>
  </div>
  
  
  </div>
    
  )
}

export default FilmCardCreator