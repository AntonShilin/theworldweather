import React from "react";
import { connect } from "react-redux";
import City from "../../UI/City/City";

class RecentCities extends React.Component {
  state = {};
  render() {
    const recent = this.props.recent;

    return (
      <div>
        {recent.recentCities.length > 0 &&
          recent.recentCities.map((obj, i) => (
            <City temp={obj.main.temp} cityName={obj.name} key={i} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    recent: store.recent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentCities);
