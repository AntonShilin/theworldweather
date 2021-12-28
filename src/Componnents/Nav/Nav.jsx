import React from "react";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search";

class Nav extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <Search />
      </header>
    );
  }
}

export default Nav;
