import React, { Component } from "react";
import style from "./TodaysForecast.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TodaysForecast extends Component {
  state = {};
  render() {
    if (this.props.todaysWeather === null || this.props.cityName === null) {
      return null;
    }

    return (
      <div className={style.todays_forecast}>
        <header>
          <h2>Today's Forecast for {this.props.cityName.name}</h2>
        </header>
        <div className={style.todays_forecast_main}>
          <ul>
            {Object.keys(this.props.todaysWeather.feels_like).map(
              (timeOfDay, i) => (
                <li key={i}>
                  <Link to="#">
                    <h3>{timeOfDay}</h3>
                    <div>
                      <span>
                        {Math.round(this.props.todaysWeather.temp[timeOfDay])} &#176;
                      </span>
                    </div>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${this.props.todaysWeather.weather[0].icon}@2x.png`}
                        alt="img"
                      />
                    </div>
                    <div>
                      {this.props.todaysWeather.rain ? (
                        <span>Rain {this.props.todaysWeather.rain}%</span>
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
  cityName: store.location.cityName,
  todaysWeather: store.location.todaysWeather,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodaysForecast);