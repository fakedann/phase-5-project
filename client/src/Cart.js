import React, { useState, useContext, useEffect } from "react";
import {MyContext} from "./App"
import GooglePayButton from '@google-pay/button-react';

function Cart(){

  const {cart, setCart, user} = useContext(MyContext)
  const [films, setFilms] = useState([])
  const [errors, setErrors] = useState(['empty']);

  const total = []
  console.log(cart)
  console.log(films)
  
  useEffect( () => {
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
          localStorage.removeItem("cart")
          setCart([])
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
 
    
    if(!user){
      return <p>plEASE LOG IN FIRST</p>
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
                      return <tr key={film.id}>
                            <td>{film.title}</td>
                            <td>${film.price}</td>
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