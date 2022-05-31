import React from "react";
import style from "./Image.module.css";
import Spinner from "../Spinner/Spinner";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    const { imageStatus } = this.state;
    const { urlToImage } = this.props;


    if (imageStatus === "failed to load") {
      return (
        <div className={style.image}>
          <div className={style.failed_to_load}>
            <p>No image</p>
          </div>
        </div>
      );
    }

    return (
      <div className={style.image}>
        {imageStatus === "loading" && <Spinner />}
        <img
          alt="img"
          src={urlToImage}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
        />
      </div>
    );
  }
}

export default Image;
