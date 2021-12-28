import React from "react";
import styles from "./MainMenuHeader.module.css";
import  Logo  from "../Logo/Logo.jsx";

class MainMenuHeader extends React.Component {
  render() {
    return <header className={styles.header}>
      <Logo/>
    </header>;
  }
}

export default MainMenuHeader;
