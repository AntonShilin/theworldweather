import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  state = {};
  render() {
    const { title, description, urlToImage } = this.props;
    return (
      <div className={styles.card}>
        <h1>
          <Link to="#">{title}</Link>
        </h1>
        <img src={urlToImage} alt="img" className={styles.card_img} />
        {/* <img src="https://dummyimage.com/25х25/ebd9eb/3b3bbd.png&text=Not+image" /> */}
        <Link to="#">{description}</Link>
      </div>
    );
  }
}

export default Card;
