import React from "react"
import "./index.css"

export default function Card(props) {
  let statusText
  if (props.item.openSpots === 0) {
    statusText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    statusText = "ONLINE"
  }

  return (
    <div className="card">
      <img className="card--photo" src={`./${props.item.coverImg}`} />

      <p>
        <img src="./star-icon.svg" className="card--starIcon" />
        {props.item.stats.rating}
        <span className="card--additionalInfo">
          ({props.item.stats.reviewCount}) &#8226; {props.item.location}
        </span>
      </p>
      <p>{props.item.title}</p>
      <p>
        <span className="card--price">From ${props.item.price}</span> / person
      </p>

      {statusText && <div className="card--status">{statusText}</div>}
    </div>
  )
}
