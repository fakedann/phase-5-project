import React, { useState, useContext, useEffect } from "react";
import {MyContext} from "./App"
import GooglePayButton from '@google-pay/button-react';

function Cart(){

  const {cart, setCart, user} = useContext(MyContext)
  const [films, setFilms] = useState([])
  const [errors, setErrors] = useState(['empty']);
  const [success, setSuccess] = useState(undefined)

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
    console.log('pagando')
    console.log(token)
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
          console.log(resp)
          setSuccess(resp)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function deleteCartItem(e){
    console.log(e.target.parentNode.parentNode.id)
    const newCart = cart.filter( (obj) => obj !== e.target.parentNode.parentNode.id)
    console.log(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    setCart(newCart)

  }

  function clearPage(){
    setSuccess(undefined)
    localStorage.removeItem("cart")
    setCart([])
  }
 
    
    if(!user){
      return <p>plEASE LOG IN FIRST</p>
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
                    if (film){
                      total.push(film.price)
                      return <tr key={film.id} id={film.id}>
                            <td>{film.title}</td>
                            <td>${film.price}<button className="deleteCartBtn" onClick={deleteCartItem}>X</button></td>
                          </tr>
                    }
                  })}
                  <tr>
                    <td>Total:</td>
                    <td>${total.reduce((a, b) => a + b, 0)}</td>
                  </tr>
              
              </tbody>
          </table>
          <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '0.50',
      currencyCode: 'USD',
      countryCode: 'US',
    },
    shippingAddressRequired: true
  }}
  onLoadPaymentData={paymentRequest => {
    console.log(paymentRequest.shippingAddress);
    sendingPayment(paymentRequest.shippingAddress.address1)
    // setToken(paymentRequest.shippingAddress.address1)
  }}
/>
    </div>
    
    
  )
}

export default Cart