import React from "react";
import { connect } from "react-redux";
import style from "./Nav.module.css";
import CurrentLocation from "../CurrentLocation/CurrentLocation";

class Nav extends React.Component {
  render() {
    return (
      <div className={style.nav}>
        <CurrentLocation />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
