import {
  GETCURRENTPOSITIONWEATHER,
  GETCURRENTPOSITION,
} from "../Types/WeatherTypes";

const weatherState = {
  currentPositionWeather: null,
  coords: null,
};

export const weatherReducer = (state = weatherState, action) => {
  switch (action.type) {
    case GETCURRENTPOSITIONWEATHER: {
      return {
        ...state,
        currentPositionWeather: action.payload,
      };
    }

    case GETCURRENTPOSITION: {
      return {
        ...state,
        coords: action.payload,
      };
    }

    default:
      return state;
  }
};
