import React, { Component } from 'react';
import style from "./TodayMoreInfo.module.css";
import Clock from '../../UI/Clock/Clock';

class TodayMoreInfo extends Component {
    state = {  } 
    render() { 
        const info = this.props.info;

        return (
            <div className={style.today}>
            <div className={style.today_header}>
              <h1>
                {info.cityName.name}, {info.cityName.sys.country} As of{" "}
                <Clock />
              </h1>
            </div>
            <section className={style.main}>
              <div className={style.main_left}>
                <span>
                  {Math.round(info.todaysWeather.temp.max)}
                  &#176;
                </span>
                <div>{info.todaysWeather.weather[0].description}</div>
                <div>
                  <span>
                    Day {Math.round(info.todaysWeather.temp.day)} &#176;
                  </span>
                  <span>&middot;</span>
                  <span>
                    Night {Math.round(info.todaysWeather.temp.night)} &#176;
                  </span>
                </div>
              </div>
              <div className={style.main_right}>
                <img
                  src={`http://openweathermap.org/img/wn/${info.todaysWeather.weather[0].icon}@2x.png`}
                  alt="icon"
                />
              </div>
            </section>
          </div>
        );
    }
}
 
export default TodayMoreInfo;