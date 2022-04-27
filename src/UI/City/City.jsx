import React from "react";
import { Link } from "react-router-dom";
import style from "./City.module.css";

class City extends React.Component {
  render() {
    const todaysWeatherInfo = this.props.todaysWeatherInfo;
    const { name, sys } = this.props.cityName;

    return (
      <div className={style.city}>
        <div>
          <Link to="#">{Math.round(todaysWeatherInfo.temp.max)}&#176;</Link>
          <Link to="#">
            {name}, {sys.country}
          </Link>
          {/* <Link to="#">{dailyWeatherInfo.sys.country}</Link> */}
        </div>
      </div>
    );
  }
}

export default City;
