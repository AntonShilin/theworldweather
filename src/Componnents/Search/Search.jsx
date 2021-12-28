import React from "react";
import styles from "./Search.module.css";

class Search extends React.Component {
  render() {
    return (
      <form action="#" className={styles.form}>
        <div className={styles.searchbox}>
          <input
            type="text"
            placeholder="Search city"
            name="city"
            className={styles.search}
          />
          <button className={styles.btn} >Go</button>
        </div>
      </form>
    );
  }
}

export default Search;
