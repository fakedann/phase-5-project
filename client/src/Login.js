import React, { useContext, useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {MyContext} from "./App"
import GooglePayButton from '@google-pay/button-react';

function Login() {

  const [showLogin, setShowLogin] = useState(true);
  const [checkToken, setToken] = useState('')
  const {user, setUser} = useContext(MyContext)
  console.log(user)
  

  if (user) return (
    <div className="welcomeDiv">
      <h2>WELCOME</h2>
      <div className="card-container">
        <h3>{user.fullname}</h3>
        <h6>{user.email}</h6>
        <p>{user.address}</p>
        <div className="buttons">
          <img id="testImg" src={user.image_url} alt="waiting for something"/>
          <button className="primary" onClick={() => handleLogoutClick()}>
            Logout
          </button>
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
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
    shippingAddressRequired: true
  }}
  onLoadPaymentData={paymentRequest => {
    console.log(paymentRequest.shippingAddress);
    setToken(paymentRequest.shippingAddress.address1)
  }}
/>
        </div>
      </div>
    </div>
  );

  function handleLogoutClick() {
    console.log('clicking')
    // console.log(checkToken)

    // fetch(`/checktoken/${checkToken}`).then((r) => {
    //   if (r.ok) {
    //     r.json().then((resp) => console.log(resp));
    //   }
    // });


    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    
      <div className="mainBox">
          {showLogin ? (
          <>
            <p>If you already have an account, please sign in.</p>
            <LoginForm />
            <p className="bottomP">
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
              <button color="secondary" onClick={() => setUser('daniel')}>
                Testuser
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm />
            <p className="bottomP">
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </div>
      
   
  );
}


export default Login;