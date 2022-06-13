import React from "react";
import { connect } from "react-redux";
import Alert from "../../UI/Alert/Alert";
import TodayMoreInfo from "../TodayMoreInfo/TodayMoreInfo";

class Today extends React.Component {
  render() {
    const location = this.props.location;

    if (location.todaysWeather === null || location.cityName === null) {
      return (
        <Alert
          msg={`${location.errorMessage}. 
            Turn on geolocation in your browser settings or enter the name of the city`}
        />
      );
    }

    // if (location.errorMessage !== null) {
    //   return (
    //     <div className={style.today}>
    //       <div className={style.today_header}>
    //         <h1>
    //           {this.props.cityName.name}, {this.props.cityName.sys.country} As
    //           of <Clock />
    //         </h1>
    //       </div>
    //       <section className={style.main}>
    //         <div className={style.main_left}>
    //           <span>
    //             {Math.round(this.props.todaysWeather.temp.max)}
    //             &#176;
    //           </span>
    //           <div>{this.props.todaysWeather.weather[0].description}</div>
    //           <div>
    //             <span>
    //               Day {Math.round(this.props.todaysWeather.temp.day)} &#176;
    //             </span>
    //             <span>&middot;</span>
    //             <span>
    //               Night {Math.round(this.props.todaysWeather.temp.night)} &#176;
    //             </span>
    //           </div>
    //         </div>
    //         <div className={style.main_right}>
    //           <img
    //             src={`http://openweathermap.org/img/wn/${this.props.todaysWeather.weather[0].icon}@2x.png`}
    //             alt="icon"
    //           />
    //         </div>
    //       </section>
    //     </div>
    //   );
    // }

    return <TodayMoreInfo info={location} />;
  }
}

const mapStateToProps = (store) => ({
  location: store.location,
  recent: store.recent,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Today);
