import React from "react";
import styles from "./Page.module.css";

class Page extends React.Component {
  render() {
    return (
      <div className={styles.page}>
        <p>Page component</p>
      </div>
    );
  }
}

export default Page;
