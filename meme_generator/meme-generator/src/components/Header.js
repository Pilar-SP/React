import React from "react"
import logo from "../images/me-gusta.png"

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <div className="a">
                    <img className="header--logo" src={logo} alt="a meme logo" />
                    <h2>Meme Generator</h2>
                </div>
                <p>React Course - Project 3</p>
            </div>
        </header>
    )
}
