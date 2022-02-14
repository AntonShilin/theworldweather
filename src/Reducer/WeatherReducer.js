import {
  GETCURRENTCITYWEATHER,
  GETCURRENTPOSITION,
  GETCURRENTPOSITIONIP,
} from "../Types/WeatherTypes";

const weatherState = {
  currentCityWeather: null,
  currentCoords: null,
  ip: null
};

export const weatherReducer = (state = weatherState, action) => {
  switch (action.type) {
    case GETCURRENTCITYWEATHER: {
      return {
        ...state,
        currentCityWeather: action.payload,
      };
    }

    case GETCURRENTPOSITION: {
      return {
        ...state,
        currentCoords: action.payload,
      };
    }
      
      
    case GETCURRENTPOSITIONIP: {
      return {
        ...state,
        ip: action.payload,
      };
    }

    default:
      return state;
  }
};
