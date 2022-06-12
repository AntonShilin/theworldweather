import React from "react";
import style from "./Alert.module.css";

function Alert(props) {

  return (
    <div className={style.alert}>
      <p>
        <span>{props.msg}</span>
      </p>
    </div>
  );
}

export default Alert;
