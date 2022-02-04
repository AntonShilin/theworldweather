import React from "react";
import styles from "./News.module.css";
import { connect } from "react-redux";
import { fetchLatestNews } from "../../Actions/MainActions";
import { Link } from "react-router-dom";

class News extends React.Component {
  componentDidMount() {
    const { latestNews } = this.props;
    if (latestNews === null) {
      this.props.getLatestNews();
    }
  }

  render() {
    return (
      <div className={styles.news}>
        {this.props.latestNews !== null &&
        this.props.latestNews.totalResults > 0 ? (
          this.props.latestNews.articles.map((article, i) => (
            <div className={styles.card_news} key={i}>
              <h1>
                <Link to="#">{article.title}</Link>
              </h1>
              <img
                src={article.urlToImage}
                alt="img"
                className={styles.card_news_img}
              />
              {/* <img src="https://dummyimage.com/25х25/ebd9eb/3b3bbd.png&text=Not+image" /> */}
              <Link to="#">{article.description}</Link>
            </div>
          ))
        ) : (
          <h1>No new news</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  latestNews: store.main.latestNews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestNews: () => dispatch(fetchLatestNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
