import React from "react";
import styles from "./Page.module.css";
import { useParams } from "react-router-dom";
import Today from "../../Componnents/Today/Today";
import TodaysForecast from "../../Componnents/TodaysForecast/TodaysForecast";
import DailyForecast from "../../Componnents/DailyForecast/DailyForecast";
import Hourly from "../../Componnents/Hourly/Hourly";

function Page() {
  let { id } = useParams();

  if (id === "today") {
    return (
      <div className={styles.page}>
        <Today />
        <TodaysForecast />
        <DailyForecast />
      </div>
    );
  }

  if (id === "hourly") {
    return (
      <div className={styles.page}>
        <Hourly />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <p>{id}</p>
    </div>
  );
}

export default Page;
