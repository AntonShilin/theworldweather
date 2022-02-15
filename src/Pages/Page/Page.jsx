import React from "react";
import styles from "./Page.module.css";
import { useParams } from "react-router-dom";
import Today from "../../Componnents/Today/Today";

function Page() {
  
  let { id } = useParams();

  return (
    <div className={styles.page}>
      <p>{id}</p>
      {id === "today" && <Today />}
    </div>
  );
}

export default Page;
