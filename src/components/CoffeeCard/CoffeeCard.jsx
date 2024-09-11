import React from "react";
import "./CoffeeCard.css";
import starfill from "../../assets/Star_fill.svg";
import star from "../../assets/Star.svg";

const CoffeeCard = (props) => {
  return (
    <div className="card">
      <div
        className="img"
        style={{ backgroundImage: `url(${props.background})` }}
      ></div>
      <div className="card-content">
        <h2>{props.name}</h2>
        <h4 className="price">{props.price}</h4>
      </div>
      {props.votes === 0 ? (
          <h2> <img src={star} alt="" srcset="" />
             {props.votes} votes
          </h2>
        ) : (
          <h2> <img src={starfill} alt="" srcset="" />
            {props.rating} ({props.votes} votes)
          </h2>
        )}
    </div>
  );
};

export default CoffeeCard;
