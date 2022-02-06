import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Image from "./Image/Image";

class Card extends React.Component {
  state = {};
  render() {
    const { title, description, urlToImage } = this.props;
    return (
      <div className={styles.card}>
        <h1>
          <Link to="#">{title}</Link>
        </h1>
        <Image urlToImage={urlToImage}/>
        <Link to="#">{description}</Link>
      </div>
    );
  }
}

export default Card;
