import React from "react";
import { connect } from "react-redux";
import {
  getDailyWeatherByCoords,
  getCityNameByCoords,
} from "../../Actions/LocationActions";
import City from "../../UI/City/City";

class CurrentLocation extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.currentCoords !== this.props.currentCoords) {
      const { longitude, latitude } = this.props.currentCoords.coords;
      this.props.getDailyWeatherByCoords(latitude, longitude);
      this.props.getCityNameByCoords(latitude, longitude);
    }

    if (prevProps.currentIPAdressInfo !== this.props.currentIPAdressInfo) {
      const { longitude, latitude } = this.props.currentIPAdressInfo;
      this.props.getCurrentCityWeather(latitude, longitude);
    }
  }

  render() {
    if (this.props.todaysWeather === null || this.props.cityName === null) {
      return null;
    }
    return (
      <City
        key={0}
        temp={this.props.todaysWeather.temp.max}
        cityName={this.props.cityName.name}
      />
    );
  }
}

const mapStateToProps = (store) => ({
  currentCoords: store.location.currentCoords,
  cityName: store.location.cityName,
  todaysWeather: store.location.todaysWeather,
  currentIPAdressInfo: store.location.currentIPAdressInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDailyWeatherByCoords: (lat, lon) =>
      dispatch(getDailyWeatherByCoords(lat, lon)),
    getCityNameByCoords: (lat, lon) => dispatch(getCityNameByCoords(lat, lon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
