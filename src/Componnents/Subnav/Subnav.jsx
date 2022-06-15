import React from "react";
import styles from "../Subnav/Subnav.module.css";
import { NavLink } from "react-router-dom";

class Subnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "today", url: "today" },
        { name: "hourly", url: "hourly" },
        { name: "5 day", url: "fiveday" },
        { name: "air quality", url: "airquality" },
      ],
    };
  }
  render() {
    const { items } = this.state;

    return (
      <div className={styles.subnav}>
        {items.map((obj, i) => (
          <div className={styles.subnav_item} key={i}>
            <NavLink to={obj.url} className={styles.subnav_item_link}>
              {obj.name}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

export default Subnav;
