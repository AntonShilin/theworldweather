import React from "react";
import style from "./Alert.module.css";

function Alert() {
  return (
    <div className={style.alert}>
      <p>
        <span>Sorry, no new news.</span>
        Please try later.
      </p>
    </div>
  );
}

export default Alert;
