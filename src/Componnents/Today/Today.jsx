import React, { Component } from "react";
import style from "./Today.module.css";
import Clock from "../../UI/Clock/Clock";

class Today extends Component {
  state = {};
  render() {
    return (
      <div className={style.today}>
        <div className={style.today_header}>
          <h1>
            Lviv <Clock/>
          </h1>
        </div>
        <section className={style.main}>
          <div className={style.main_left}>
            <span>7C</span>
            <div>Mostly Cloudy</div>
            <div>
              <span>Day 7</span> <span>Night -1</span>
            </div>
          </div>
          <div className={style.main_right}>
            <img
              src={`https://static.meteoblue.com/assets/images/picto/03_iday.svg`}
              alt="icon"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Today;
