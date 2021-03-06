import React from "react";
import style from "./Clock.module.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };
  }

  render() {
    const { hours, minutes } = this.state;
    return (
      <span className={style.clock}>
        {hours}:{minutes}
      </span>
    );
  }
}

export default Clock;
