import React from "react";
import { connect } from "react-redux";
import style from "./Nav.module.css";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import {
  getCurrentPositionCoords,
  getCurrentPositionIP,
} from "../../Actions/LocationActions";

class Nav extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.getCurrentPositionCoords(position);
      },
      (error) => {
        console.log("Error:", error);
        // this.props.getCurrentPositionIP();
      }
    );
  }

  render() {
    return (
      <div className={style.nav}>
        <CurrentLocation />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
