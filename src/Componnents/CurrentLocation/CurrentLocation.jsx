import React from "react";
import { connect } from "react-redux";
import {
  getCurrentPositionCoords,
  getCurrentPositionIP,
  getCurrentCityWeather,
} from "../../Actions/WeatherActions";
import style from "./CurrentLocation.module.css";
import { Link } from "react-router-dom";

class CurrentLocation extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.getCurrentPositionCoords(position);
      },
      (error) => {
        console.log("Error:", error);
        this.props.getCurrentPositionIP();
      }
    );
  }

  // const { longitude, latitude } = this.props.currentCoords.coords;
  //   this.props.getCurrentCityWeather(latitude, longitude);

  render() {
    return (
      <div className={style.current_city}>
        <div>
          <Link to="#">City</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currentCoords: store.info.currentCoords,
  currentCityWeather: store.info.currentCityWeather,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentPositionCoords: (position) =>
      dispatch(getCurrentPositionCoords(position)),
    getCurrentPositionIP: () => dispatch(getCurrentPositionIP()),
    getCurrentCityWeather: (lat, lon) =>
      dispatch(getCurrentCityWeather(lat, lon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
