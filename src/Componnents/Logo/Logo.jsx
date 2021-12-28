import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logobox}>
        <div className={styles.logo}>
          <Link to="/">The World Channel</Link>
        </div>
      </div>
    );
  }
}

export default Logo;
