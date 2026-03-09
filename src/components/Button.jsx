import React from "react";
import style from "./UserCard.module.css";

const Button = () => {
  return (
    <div>
      <div className={style.buttons}>
        <button className={style.btn}>Subscribe</button>
        <button className={style.btn}>Message</button>
      </div>
    </div>
  );
};

export default Button;
