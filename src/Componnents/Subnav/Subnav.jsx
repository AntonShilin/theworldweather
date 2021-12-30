import React from "react";
import styles from "../Subnav/Subnav.module.css";
import { NavLink } from "react-router-dom";

class Subnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["today", "hourly", "5 day", "air quality"] };
  }
  render() {
    const { items } = this.state;
    return (
      <div className={styles.subnav}>
        {items.map((name, i) => (
          <div className={styles.item} key={i}>
            <NavLink
              to={name}
              className={styles.link}
            >
              {name}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default Subnav;
