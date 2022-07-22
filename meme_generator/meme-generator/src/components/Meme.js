import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

      /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     *
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     *
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     *
     * Lastly, update the `getMemeImage` function and the markup
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

  function getMemeImage() {
    const memes = memesData.data.memes
    // console.log(memes)
    let num = Math.floor(Math.random() * memes.length + 1)
    const url = memes[num].url
    setMeme(oldState => ({
      ...oldState,
      randomImage: url
    }))
  }
  // getMemeImage()

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top text"
         />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
        />
        <button
          onClick={getMemeImage}
          className="form--button"
        >
          Get a new meme image 🔥
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="random meme" />
    </main>
  )
}
