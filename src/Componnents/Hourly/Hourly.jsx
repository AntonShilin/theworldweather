import React from "react";
import styles from "./Hourly.module.css";

class Hourly extends React.Component {
  render() {
    return (
      <div className={styles.hourly}>
        <div>
          <h1>h1</h1>
          <div>time</div>
        </div>
        <div>2</div>
      </div>
    );
  }
}

export default Hourly;
