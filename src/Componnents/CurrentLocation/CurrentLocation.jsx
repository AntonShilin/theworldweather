import React from "react";
import { connect } from "react-redux";
import { getCurrentCityWeather } from "../../Actions/LocationActions";
import style from "./CurrentLocation.module.css";
import City from "../../UI/Card/City/City";

class CurrentLocation extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.currentCoords !== this.props.currentCoords) {
      const { longitude, latitude } = this.props.currentCoords.coords;
      this.props.getCurrentCityWeather(latitude, longitude);
    }
  }

  render() {
    if (this.props.currentCityWeather === null) {
     return <div></div>
   }
    return <City weatherInfo={this.props.currentCityWeather} />
  }
}

const mapStateToProps = (store) => ({
  currentCoords: store.location.currentCoords,
  currentCityWeather: store.location.currentCityWeather,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentCityWeather: (lat, lon) =>
      dispatch(getCurrentCityWeather(lat, lon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
