import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkList: [
        "Feedback",
        "Careers",
        "Press Room",
        "Advertise With Us",
        "TV",
      ],
      legalLinks: [
        "Terms of Use",
        "Privacy Policy",
        "Ad Choices",
        "Accessibility Statement",
        "Data Vendors",
      ],
    };
  }

  render() {
    const { linkList, legalLinks } = this.state;
    return (
      <footer className={styles.footer}>
        <div className={styles.first_list}>
          {linkList.map((value, i) => (
            <NavLink to="#" key={i} className={styles.first_list_link}>
              {value}
            </NavLink>
          ))}
        </div>
        <div className={styles.last_list}>
          {legalLinks.map((name, k) => (
            <NavLink to="#" key={k}  className={styles.last_list_link}>
              {name}
            </NavLink>
          ))}
        </div>
        <p className={styles.footer_text}>
          We recognize our responsibility to use data and technology for good.
          Take control of your data.
        </p>
        <span className={styles.footer_text_icon}>
          Powered by the Weather App
        </span>
      </footer>
    );
  }
}

export default Footer;
