import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search";



class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <Search />
      </header>
    );
  }
}


export default Header;
