import React from "react"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import instagram from "../images/Instagram.png"
import github from "../images/Instagram.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={github}></img>
        </div>
    )
}
