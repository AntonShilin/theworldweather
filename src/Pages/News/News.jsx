import React from "react";
import styles from "./News.module.css";
import { connect } from "react-redux";
import { fetchLatestNews } from "../../Actions/MainActions";
import Card from "../../UI/Card/Card";
import Alert from "../../UI/Card/Alert/Alert";

class News extends React.Component {
  componentDidMount() {
    const { latestNews } = this.props;
    if (latestNews === null) {
      // this.props.getLatestNews();
    }
  }

  render() {
    return (
      <div className={styles.news}>
        {this.props.latestNews !== null &&
        this.props.latestNews.totalResults > 0 ? (
          this.props.latestNews.articles.map((article, i) => (
            <div key={i}>
              <Card
                title={article.title}
                description={article.description}
                urlToImage={article.urlToImage}
              />
            </div>
          ))
        ) : (
          <Alert/>
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
