import React from "react"
import pinpointer from "../images/pinpoint.png"

export default function Card(props) {
  return (
    <div className="cardContainer">
      <img className="card--image" src={props.picture} alt=""/>
      <div className="card--info">
        <div className="card--location">
          <img className="pinpoint" src={pinpointer} alt="a pointer"/>
          <h5 className="location">{props.location}</h5>
          <a className="map" href='{props.googleMapsUrl}'>View on Google maps</a>
        </div>
        <h1 className="title">{props.title}</h1>
        <strong className="dates">{props.startDate} - {props.endDate}</strong>
        <p className="description">{props.description}</p>
      </div>
    </div>

  )
}
