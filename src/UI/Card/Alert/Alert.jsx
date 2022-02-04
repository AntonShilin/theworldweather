import React from "react";
import style from "./Alert.module.css";

function Alert() {
  return (
    <div className={style.alert}>
      <p>
        <strong>Sorry, no new news!</strong> Please try later!!!
      </p>
    </div>
  );
}

export default Alert;
