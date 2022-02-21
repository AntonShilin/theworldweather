import React from "react";
import style from "./Today.module.css";
import Clock from "../../UI/Clock/Clock";
import { connect } from "react-redux";

class Today extends React.Component {
  render() {
    if (this.props.dailyWeather === null || this.props.cityName === null) {
      return null;
    }

    return (
      <div className={style.today}>
        <div className={style.today_header}>
          <h1>
            {this.props.cityName.name}, {this.props.cityName.sys.country}{" "}
            <Clock />
          </h1>
        </div>
        <section className={style.main}>
          <div className={style.main_left}>
            <span>
              {Math.round(this.props.dailyWeather.temp.max)}
              &#176;
            </span>
            <div>{this.props.dailyWeather.weather[0].description}</div>
            <div>
              <span>
                Day {Math.round(this.props.dailyWeather.temp.day)} &#176;
              </span>
              <span>
                Night {Math.round(this.props.dailyWeather.temp.night)} &#176;
              </span>
            </div>
          </div>
          <div className={style.main_right}>
            <img
              src={`http://openweathermap.org/img/wn/${this.props.dailyWeather.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  dailyWeather: store.location.dailyWeather,
  cityName: store.location.cityName,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Today);
