import React, { useState, useContext } from "react";
import {MyContext} from "./App"

function SignUpForm(){

    const [formData, setFormData] = useState({
      email: '',
      password: '',
      fullname: '',
      address: ''
    });
    const [errors, setErrors] = useState([]);
    const {setUser} = useContext(MyContext)
  
  
    function handleChange(event) {
      const name = event.target.name;
      let value = event.target.value;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  
    function checkSubmit(event){
      event.preventDefault()
      const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const letters = /^[A-Za-z ]+$/
      const address = /^[a-zA-Z 0-9_.-]*$/
  
      if(email.test(formData.email) && formData.password.length > 5 &&letters.test(formData.fullname) && address.test(formData.address) ){

        handleSubmit()
      }else{
        setErrors(["One of your fields has at least one invalid character. Please, try again."])
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      setErrors([]);
      const newUser = new FormData()
      newUser.append("user[fullname]", formData.fullname)
      newUser.append("user[address", formData.address)
      newUser.append("user[email]", formData.email)
      newUser.append("user[password]", formData.password)

    fetch("/signup", {
      method: "POST",
      body: newUser,
    }).then((r) => {
      if (r.ok) {
        r.json().then((resp) => setUser(resp) );
      } else {
        r.json().then((err) => {
          console.log(err)
          setErrors(err.errors)
        });
      }
    });
    }
  
    return (
      <div className="mainBox">
        <div id="aboutBox">
            <form onSubmit={handleSubmit}>
            <div className="formElement">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="formElement">
                <label>Password (+5):</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div className="formElement">
                <label>Name:</label>
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  value={formData.fullname}
                />
              </div>
              <div className="formElement">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
              <button id="submit" type="submit">Submit</button>
              <p>{errors}</p>
              {errors.includes('Fullname')? <p>The name field only accepts letters.</p>: null}
              {errors.includes('Address')? <p>The address field only accepts letters and numbers.</p>: null}
              {errors.includes('Email')? <p> Make sure that you follow standard formats for email addresses</p>: null}
            </form>
        </div>
      </div>  
    )
  }

export default SignUpForm;