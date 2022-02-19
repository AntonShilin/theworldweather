import React from "react";
import style from "./Clock.module.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      day: new Date().getDay(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
  }

  render() {
    const { day, month, year } = this.state;
    return (
      <span className={style.clock}>
        {day}.{month + 1}.{year}
      </span>
    );
  }
}

export default Clock;
