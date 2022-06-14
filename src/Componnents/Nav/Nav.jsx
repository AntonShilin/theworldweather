import React from "react";
import { connect } from "react-redux";
import style from "./Nav.module.css";
import RecentCities from "../RecentCities/RecentCities";

class Nav extends React.Component {
  render() {
    return (
      <div className={style.nav}>
        <RecentCities />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
