import React from "react";
import { connect } from "react-redux";
import City from "../../UI/City/City";

class RecentCities extends React.Component {
  state = {};
  render() {
    const recentCities = this.props.recentCities;
    console.log(recentCities);

    return (
      <div>
        {recentCities.length > 0 &&
          recentCities.map((obj, i) => (
            <City temp={obj.main.temp} cityName={obj.name} key={i} />
            // <div key={i}>{i}</div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    recentCities: store.recentCities.recentCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentCities);
