import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

  function getMemeImage() {
    const memes = memesData.data.memes
    let num = Math.floor(Math.random() * memes.length + 1)
    console.log(memes[num].url)
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text"/>
        <input className="form--input" type="text" placeholder="Bottom text"/>
        <button onClick={getMemeImage} className="form--button">Get a new meme image 🔥</button>
      </div>
    </main>
  )
}
