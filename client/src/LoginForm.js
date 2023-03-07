import React, { useState } from "react";

function LoginForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState([]);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => console.log(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
 

  return (
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
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <button id="submit" type="submit">Submit</button>
              <div>{errors.map((err) => (
                <p key={err}>{err}</p>
              ))}</div>
        </form>
  );
}

export default LoginForm;