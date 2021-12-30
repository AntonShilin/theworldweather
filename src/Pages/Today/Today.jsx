import React from "react";
import styles from "./Today.module.css";

class Today extends React.Component {
  render() {
    return (
      <div className={styles.today}>
        <h3>Today</h3>
      </div>
    );
  }
}

export default Today;
