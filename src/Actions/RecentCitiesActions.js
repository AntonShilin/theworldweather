import {
  SEARCHCURRENTWEATHERBYCITYNAME,
  GETSEARCHCITYNAME,
} from "../Types/RecentCitiesTypes";

export const searchCurrentWeatherByCityName = (name) => {
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
        dispatch({ type: SEARCHCURRENTWEATHERBYCITYNAME, payload: result })
      )
      .catch(function (err) {
        throw new Error(err);
      });
};

export const getSearchCityName = (name) => {
  return {
    type: GETSEARCHCITYNAME,
    payload: name,
  };
};
