import React from "react";
import { Link } from "react-router-dom";
import style from "./City.module.css";

class City extends React.Component {
  state = {};
  render() {
    return (
      <div className={style.city}>
        <div>
          <Link to="#">{Math.round(this.props.weatherInfo.main.temp)}</Link>
          <Link to="#">{this.props.weatherInfo.name},</Link>
          <Link to="#">{this.props.weatherInfo.sys.country}</Link>
        </div>
      </div>
    );
  }
}

export default City;