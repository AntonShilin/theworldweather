import React from "react";
import styles from "./Hourly.module.css";
import Clock from "../../UI/Clock/Clock";
import { connect } from "react-redux";
import Alert from "../../UI/Alert/Alert";

class Hourly extends React.Component {
  render() {
    const recentCities = this.props.recentCities;

    if (recentCities.length === 0) {
      return <Alert msg={`Enter the name of the city`} />;
    }

    return (
      <div className={styles.hourly}>
        <header className={styles.hourly_header}>
          <h2>
            Today's Forecast for
            <span>
              - {recentCities[0].name} , {recentCities[0].sys.country}
            </span>
          </h2>
          <div>
            As of <Clock />
          </div>
        </header>
        <main className={styles.hourly_main}>2</main>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  recentCities: store.recent.recentCities,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Hourly);
