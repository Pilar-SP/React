import React from "react"

export default function Card(props) {
  return (
    <div className="cardContainer">
      <img src={props.picture} alt=""/>
      <div className="card--info">
        <div className="card--location">
          <img/>
          <h5>{props.location}</h5>
          <a href='{props.googleMapsUrl}'>View on Google maps</a>
        </div>
        <h2>{props.title}</h2>
        <strong>{props.startDate}-{props.endDate}</strong>
        <p></p>
      </div>
    </div>

  )
}
