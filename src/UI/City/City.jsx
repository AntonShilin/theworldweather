import React from "react";
import { Link } from "react-router-dom";
import style from "./City.module.css";

class City extends React.Component {
    
  render() {
      const weatherInfo = this.props.weatherInfo;
      
    return (
      <div className={style.city}>
        <div>
          <Link to="#">{Math.round(weatherInfo.main.temp)}&#176;</Link>
          <Link to="#">{weatherInfo.name},</Link>
          <Link to="#">{weatherInfo.sys.country}</Link>
        </div>
      </div>
    );
  }
}

export default City;
