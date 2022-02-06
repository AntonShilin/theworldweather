import React from "react";
import style from "./Image.module.css";
import Spinner from "../Spinner/Spinner";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: false, imageLoadedError: false };
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: true });
  };

  handleImageErrored = () => {
    this.setState({ imageStatus: false, imageLoadedError: false });
  };

  render() {
    const { imageStatus } = this.state;
    return (
      <div className={style.image}>
        {imageStatus ? (
          <img
            alt="img"
            src={this.props.urlToImage}
            onLoad={this.handleImageLoaded}
            onError={this.handleImageErrored}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Image;
