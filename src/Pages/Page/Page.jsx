import React from "react";
import styles from "./Page.module.css";
import { useParams } from "react-router-dom";

function Page() {
  //   const { value } = this.props;
  let { id } = useParams();
  console.log(id);

  return (
    <div className={styles.page}>
      <p>{id}</p>
    </div>
  );
}

export default Page;
