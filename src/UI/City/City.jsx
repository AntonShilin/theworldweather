import React from "react";
import { Link } from "react-router-dom";
import style from "./City.module.css";

class City extends React.Component {
  render() {
    const { temp, city } = this.props;

    return (
      <div className={style.city}>
        <div>
          <Link to="#">{Math.round(temp)}&#176;</Link>
          <Link to="#">{city}</Link>
        </div>
      </div>
    );
  }
}

export default City;
