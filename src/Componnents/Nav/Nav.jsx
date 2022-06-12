import React from "react";
import { connect } from "react-redux";
import style from "./Nav.module.css";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import {
  getCurrentPositionCoords,
  getCurrentPositionIP,
  getErrorMessage
} from "../../Actions/LocationActions";
import RecentCities from "../RecentCities/RecentCities";



class Nav extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.getCurrentPositionCoords(position);
      },
      (error) => {
        console.log("Error:", error);
        // this.props.getCurrentPositionIP();
        this.props.getErrorMessage(error.message)
      }
    );
  }

  render() {
    return (
      <div className={style.nav}>
        <CurrentLocation />
        <RecentCities/>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentPositionCoords: (position) =>
      dispatch(getCurrentPositionCoords(position)),
    getCurrentPositionIP: () => dispatch(getCurrentPositionIP()),
    getErrorMessage: (value) => dispatch(getErrorMessage(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
