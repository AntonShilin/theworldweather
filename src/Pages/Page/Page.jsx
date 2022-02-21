import React from "react";
import styles from "./Page.module.css";
import { useParams } from "react-router-dom";
import Today from "../../Componnents/Today/Today";
import TodaysForecast from "../../Componnents/TodaysForecast/TodaysForecast";

function Page() {
  let { id } = useParams();

  if (id === "today") {
    return (
      <div className={styles.page}>
        <Today />
        <TodaysForecast/>
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
