import React, { Component } from "react";
import style from "./TodaysForecast.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TodaysForecast extends Component {
  state = {};

  render() {
    const recentCities = this.props.recentCities;

    if (recentCities.length === 0) {
      return null;
    }

    return (
      <div className={style.todays_forecast}>
        <header>
          <h2>Today's Forecast for {recentCities[0].name}</h2>
        </header>
        <div className={style.todays_forecast_main}>
          <ul>
            {recentCities[0].hourly.map(
              (hour, i) =>
                i <= 3 && (
                  <li key={i}>
                    <Link to="#">
                      <h3>{hour.dt}</h3>
                      <div>
                        <span>{hour.temp} &#176;</span>
                      </div>
                      <div>
                        <img
                          src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                          alt="img"
                        />
                      </div>
                      <div>
                        {hour.rain ? (
                          <span>Rain {Math.round(hour.rain)}%</span>
                        ) : (
                          <span>---</span>
                        )}
                      </div>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
        <footer>
          <Link to="#">Next Hours</Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  recentCities: store.recent.recentCities,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodaysForecast);
