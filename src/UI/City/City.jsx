import React from "react";
import { Link } from "react-router-dom";
import style from "./City.module.css";

class City extends React.Component {
  render() {
    const temp = this.props.temp;
    const name = this.props.cityName;

    return (
      <div className={style.city}>
        <div>
          <Link to="#">{Math.round(temp)}&#176;</Link>
          <Link to="#">
            {name}
          </Link>
          {/* <Link to="#">{dailyWeatherInfo.sys.country}</Link> */}
        </div>
      </div>
    );
  }
}

export default City;
