import React, { useState, useContext, useEffect } from "react";
import {MyContext} from "./App"
import { PayPalButtons } from "@paypal/react-paypal-js";
import uuid from 'react-uuid';
import { toast } from 'react-toastify';


function Cart(){

  const {user, cart, setCart} = useContext(MyContext)
  const [films, setFilms] = useState([])
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(undefined)
  const notify = () => toast("Payment was successful!", {position: "top-center", autoClose: 2000});
  

  const total = []
  
  useEffect( () => {
    if(user){
      fetch("/createcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({cart: cart}),
      }).then((r) => {
        if (r.ok) {
          r.json().then((resp) => setFilms(resp));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  }, [user, cart])


  function sendingPayment(token){
    fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({tok: token,
      cart: cart}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => {
          notify()
          setSuccess(resp)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function deleteCartItem(e){
    let flag = 0
    let i = 0
    while (flag === 0){
      if (cart[i] === e.target.parentNode.parentNode.id){
        const removed = cart.splice(i, 1)
        flag = 1
      }
      i++
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    setCart([...cart])

  }

  function clearCart(){
    localStorage.removeItem("cart")
    setCart([])
  }

  function clearPage(){
    setSuccess(undefined)
    localStorage.removeItem("cart")
    setErrors([])
    setCart([])
  }
 
    
    if(!user){
      return <p>Please, log in first.</p>
    }

    if(success){
      return (
        <div>
        <p>Your payment has been succesfully submitted! Thank you so much!</p>
        <button onClick={clearPage}>OK</button>
      </div>
      )
    }


  return (
    <div id="cart">
      <p>{errors}</p>
       <table className="styled-table">
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                  {cart.map( filmObj => {
                    let film = films.find( obj => obj.id === parseInt(filmObj))

                    if(!film) return null
                  
                    let tax = film.price*0.07
                    total.push(film.price+tax)
                    return <tr key={uuid()} id={film.id}>
                            <td>{film.title}</td>
                            <td>${film.price}<button className="deleteCartBtn" onClick={deleteCartItem}>X</button></td>
                          </tr>
                  })}
                  <tr>
                    <td>Total:</td>
                    <td>${Number((total.reduce((a, b) => a + b, 0)).toFixed(2))}</td> 
                  </tr>
              
              </tbody>
          </table>
          <button id="cartclear" onClick={clearCart}>Clear cart</button>
          { Number((total.reduce((a, b) => a + b, 0)).toFixed(2)) > 0 ? <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "0.01",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        
                        sendingPayment(details.payer.address.address_line_1)
            
                    });
                }} /> : null}
    </div>
    
    
  )
}

export default Cart