import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
  return (
    <nav className="nav">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/history">History</Link>
        <Link to="/rating">Leave a Rating</Link>
      </ul>
    </nav>
  )
}

export default NavBar