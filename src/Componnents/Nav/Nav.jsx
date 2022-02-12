import React from "react";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search";
import { connect } from "react-redux";

class Nav extends React.Component {
  // getLocation() {
  //   if (navigator.geolocation) {
  //     console.log(navigator.geolocation.getCurrentPosition());
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  componentDidMount() {
    if (window.navigator.geolocation) {
      console.log(window.navigator.geolocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <Logo />
        <Search />
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  // latestNews: store.news.latestNews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // getLatestNews: () => dispatch(fetchLatestNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
