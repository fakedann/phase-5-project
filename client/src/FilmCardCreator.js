import React, { useContext } from "react";
import {MyContext} from "./App"
import { toast } from 'react-toastify';

function FilmCardCreator( film ){

  const {cart, setCart} = useContext(MyContext)
  const notify = () => toast("Succesfully added to cart!", {position: "top-center", autoClose: 1500});

  return (
    <div id="container" key={film.id}>	
	
  
    <div className="product-details">
      
      
    <h1>{film.title}</h1>
    <h4>Rating: {film.avg}</h4>
  
      <p className="information">{film.description}</p>
  
      
      
  
  <div className="control">
    
 
    <button id={film.id} className="btn" onClick={ (e) => {
      let copyCart = [...cart, e.target.parentNode.id]
      setCart([...cart, e.target.parentNode.id])
      localStorage.setItem("cart", JSON.stringify(copyCart))
      notify()
    }}>
 
     <span className="price">${film.price}</span>
  
     <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
 
     <span className="buy">Add to Cart</span>
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