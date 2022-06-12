import React from "react";
import styles from "./News.module.css";
import { connect } from "react-redux";
import { fetchLatestNews } from "../../Actions/LatestNewsActions";
import Card from "../../UI/Card/Card";
import Alert from "../../UI/Alert/Alert";

class News extends React.Component {
  componentDidMount() {
    const { latestNews } = this.props;
    if (latestNews === null) {
      // this.props.getLatestNews();
    }
  }

  render() {
    if (
      (this.props.latestNews !== null &&
        this.props.latestNews.totalResults === 0) ||
      this.props.latestNews === null
    ) {
      return (
        <div className={styles.news}>
          <Alert msg={"Sorry, no new news."} />
        </div>
      );
    }

    return (
      <div className={styles.news}>
        {this.props.latestNews !== null &&
          this.props.latestNews.totalResults > 0 &&
          this.props.latestNews.articles.map((article, i) => (
            <div key={i}>
              <Card
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
              />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  latestNews: store.news.latestNews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestNews: () => dispatch(fetchLatestNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
