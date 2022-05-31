import React, { Component } from "react";
import style from "./DailyForecast.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DailyForecast extends Component {
  state = {};

  convertMillToDate(value) {
    const dateInMs = value;
    const date = new Date(dateInMs);
  }

  render() {
    if (this.props.dailyWeather === null) {
      return null;
    }

    return (
      <div className={style.daily_forecast}>
        <header>
          <h2>Daily Forecast</h2>
        </header>
        <div className={style.daily_forecast_main}>
          <ul>
            {this.props.dailyWeather.map(
              (day, i) =>
                i < 4 && (
                  <li key={i}>
                    <Link to="#">
                      <h3>{ new Date(day.dt).toLocaleDateString()}</h3>
                      <div>
                        <span>{day.temp.max}&#176;</span>
                        <span>{day.temp.min}&#176;</span>
                      </div>
                      <div>
                        <img
                          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt="img"
                        />
                      </div>
                      <div>
                        {day.rain ? (
                          <span>Rain {Math.round(day.rain * 100)}%</span>
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
          <Link to="#">Next 10 Days</Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  dailyWeather: store.location.dailyWeather,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecast);
