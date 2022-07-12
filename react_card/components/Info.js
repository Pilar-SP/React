import React from "react"

export default function Info() {
    return (
        <div className="Info">
            <img className="photo" src="../images/pili"></img>
            <h3 className="Info--name">Pilar Sanchez</h3>
            <h4 className="Info--title">Full Stack Developer</h4>
            <p className="email">PilarSanchez.com</p>
            <div className="button-container">
                <a className="button-email" href="#">Email</a>
                <a className="button-linkedin" href="#">Linkedin</a>
            </div>
        </div>
    )
}
