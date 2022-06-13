import React from "react";
import styles from "./Search.module.css";
import { connect } from "react-redux";
import {
  searchWeatherByCityName,
  enterCityName,
} from "../../Actions/RecentCitiesActions.js";

class Search extends React.Component {
  updateInputValue(evt) {
    this.props.enterCityName(evt.target.value);
  }

  render() {
    const searchCityName = this.props.searchCityName;

    return (
      <div action="#" className={styles.form}>
        <div className={styles.searchbox}>
          <input
            type="text"
            placeholder="Search city"
            name="city"
            className={styles.search}
            onChange={(value) => this.updateInputValue(value)}
          />
          <button
            className={styles.btn}
            disabled={searchCityName !== null ? false : true}
            onClick={() =>
              this.props.searchWeatherByCityName(searchCityName)
            }
          >
            Go
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    searchCityName: store.recent.searchCityName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchWeatherByCityName: (name) =>
      dispatch(searchWeatherByCityName(name)),
      enterCityName: (name) => dispatch(enterCityName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
