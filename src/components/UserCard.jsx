import React from "react";
import style from "./UserCard.module.css";
import Button from "./Button";

const UserCard = (props) => {
  return (
    <div className={style.container}>
      <div className={style.upperPortion}></div>

      {/* img */}
      <div className={style.imgContainer}>
        <img src={props.image} alt="" className={style.img} />
      </div>

      {/* name */}
      <div className={style.name}>{props.name}</div>

      {/* paragragp */}
      <div className={style.detail}>{props.detail}</div>

      {/* logos */}
      <div className={style.logoContainer}>
        {props.logos.map((logo, idx) => (
          <span key={idx} className={style.logo}>
            {logo}
          </span>
        ))}
      </div>

      <Button />

      {/* ratting */}
      <div className={style.rattingContainer}>
       {props.ratings.map((rate, idx) => (
  <span key={idx} className={style.ratting}>
    <span className={style.icon}>{rate.icon}</span>
    {rate.value} {idx < props.ratings.length - 1 && "|"}
  </span>
))}
      </div>
    </div>
  );
};

export default UserCard;
