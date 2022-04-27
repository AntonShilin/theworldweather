import {
  GETDAILYWEATHERBYCOORDS,
  GETCURRENTPOSITION,
  GETCURRENTPOSITIONIP,
  GETCITYNAMEBYCOORDS,
} from "../Types/LocationTypes";

export const getDailyWeatherByCoords = (lat, lon) => {
  return (dispatch) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely&appid=6f9efbe15879cba2437b95d10e5fc2a6`
      // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f9efbe15879cba2437b95d10e5fc2a6&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((result) =>
        dispatch({ type: GETDAILYWEATHERBYCOORDS, payload: result })
      )
      .catch(function (err) {
        throw new Error(err);
      });
};

export const getCityNameByCoords = (lat, lon) => {
  return (dispatch) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6f9efbe15879cba2437b95d10e5fc2a6&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((result) =>
        dispatch({ type: GETCITYNAMEBYCOORDS, payload: result })
      )
      .catch(function (err) {
        throw new Error(err);
      });
};

export const getCurrentPositionCoords = (position) => {
  return {
    type: GETCURRENTPOSITION,
    payload: position,
  };
};

export const getCurrentPositionIP = () => {
  return (dispatch) =>
    fetch(
      'https://api.freegeoip.app/json/?apikey=a0849100-8e58-11ec-a011-29bbdebcde3c'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((result) =>
        dispatch({ type: GETCURRENTPOSITIONIP, payload: result })
      )
      .catch(function (err) {
        throw new Error(err);
      });
};
