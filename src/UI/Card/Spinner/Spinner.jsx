import React from "react";
import style from "./Spinner.module.css";

class Spinner extends React.Component {
  render() {
    return (
      <div className={style.spinner}>
        <div className={style.lds_facebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
