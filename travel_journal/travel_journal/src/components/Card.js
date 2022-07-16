import React from "react"
import pinpointer from "../images/pinpoint.png"

export default function Card(props) {
  return (
    <div className="cardContainer">
      <img className="card--image" src={props.picture} alt=""/>
      <div className="card--info">
        <div className="card--location">
          <img className="pinpoint" src={pinpointer} alt="a pointer"/>
          <h5>{props.location}</h5>
          <a href='{props.googleMapsUrl}'>View on Google maps</a>
        </div>
        <h3>{props.title}</h3>
        <strong>{props.startDate}-{props.endDate}</strong>
        <p>{props.description}</p>
      </div>
    </div>

  )
}
