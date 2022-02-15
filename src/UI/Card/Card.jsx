import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Image from "../Image/Image.jsx";

class Card extends React.Component {
  render() {
    const { title, description, urlToImage } = this.props;

    return (
      <div className={styles.card}>
        <h1>
          <Link to="#">{title}</Link>
        </h1>
        <Image urlToImage={urlToImage} />
        <p>
          <Link to="#">{description}</Link>
        </p>
      </div>
    );
  }
}

export default Card;
