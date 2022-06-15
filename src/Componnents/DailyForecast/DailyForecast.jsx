import React from "react";
import style from "./DailyForecast.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ConvertToDay } from "../../UI/CovertDate/ConvertDate";

class DailyForecast extends React.Component {

  render() {
    const recentCities = this.props.recentCities;
    
    if (recentCities.length === 0) {
      return null;
    }

    return (
      <div className={style.daily_forecast}>
        <header>
          <h2>Daily Forecast</h2>
        </header>
        <div className={style.daily_forecast_main}>
          <ul>
            {recentCities[0].daily.map(
              (day, i) =>
                i < 4 && (
                  <li key={i}>
                    <Link to="#">
                      <h3><ConvertToDay dt={day.dt}/></h3>
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
                          <span>Rain {day.rain}%</span>
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
  recentCities: store.recent.recentCities,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecast);
