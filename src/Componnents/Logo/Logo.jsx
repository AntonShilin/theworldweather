import React from "react";
import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logobox}>
        <div className={styles.logo}>
          <NavLink to="/">The World Channel</NavLink>
        </div>
      </div>
    );
  }
}

export default Logo;
