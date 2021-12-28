import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        The World Channel
        {/* <Link to="#">The World Channel</Link> */}
      </div>
    );
  }
}

export default Logo;
