import React from "react";
import navbarIcon from "../images/travel.png";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--icon" src={navbarIcon} alt="world icon"/>
      <h2 className="nav--title">Travel Journal</h2>
    </nav>
  )
}
