import {
  GETCURRENTCITYWEATHER,
  GETCURRENTPOSITION,
  GETCURRENTPOSITIONIP,
} from "../Types/LocationTypes";

export const getCurrentCityWeather = (lat, lon) => {
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
        dispatch({ type: GETCURRENTCITYWEATHER, payload: result })
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
      "http://api.ipstack.com/check?access_key=619b6eb00393dffb67164bab90fbf55a"
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
