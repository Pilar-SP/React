import React from "react";
import navbarIcon from "../images/travel.png";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--icon" src={navbarIcon} alt="world icon"/>
      <h3>Travel Journal</h3>
    </nav>
  )
}
