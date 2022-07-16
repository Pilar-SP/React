import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App() {
  const cards = Data.map(function(item) {
    return (
      <Card
        title={item.title}
        location={item.location}
        map={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        picture={item.imageUrl}

      />
    )
  })

  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}
