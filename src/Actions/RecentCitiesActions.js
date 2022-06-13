import {
    GETWEATHERBYCOORDS,
    ENTERCITYNAME,
} from "../Types/RecentCitiesTypes";

export const searchWeatherByCityName = (name) => {
  return (dispatch) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6f9efbe15879cba2437b95d10e5fc2a6&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((result) =>
          dispatch(getWeatherByCoords(result))
      )
      .catch(function (err) {
        throw new Error(err);
      });
};


export const getWeatherByCoords = (result) => {
    return (dispatch) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&units=metric&exclude=current,minutely&appid=6f9efbe15879cba2437b95d10e5fc2a6`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((obj) =>
        dispatch({ type: GETWEATHERBYCOORDS, payload: {...obj, ...result} })
        )
        .catch(function (err) {
          throw new Error(err);
        });
  };

export const enterCityName = (name) => {
  return {
    type: ENTERCITYNAME,
    payload: name,
  };
};
