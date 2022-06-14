import React from "react";
import { connect } from "react-redux";
import Alert from "../../UI/Alert/Alert";
import TodayMoreInfo from "../TodayMoreInfo/TodayMoreInfo";

class Today extends React.Component {
  render() {
    const recentCities = this.props.recentCities;

    if (
      recentCities.length === 0
    ) {
      return (
        <Alert
          msg={`Enter the name of the city`}
        />
      );
    }

    return <TodayMoreInfo info={recentCities[0]} />;
  }
}

const mapStateToProps = (store) => ({
  recentCities: store.recent.recentCities
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Today);
