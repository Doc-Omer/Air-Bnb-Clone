import React from "react";
import Star from "../assets/star.png";
import "../App.css";

export default function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.data.coverImg} />

      <div className="card--stats">
        <img className="card--star" src={Star} />
        <span>{props.data.stats.rating}</span>
        <span className="grey">({props.data.stats.reviewCount}) •</span>
        <span className="grey">{props.data.location}</span>
      </div>

      <p>{props.data.title}</p>
      <div className="pricing">
        <p>
          <span className="bold">From ${props.data.price} </span>/ person
        </p>
      </div>
    </div>
  );
}
