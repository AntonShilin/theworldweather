import {
  GETCURRENTCITYWEATHER,
  GETCURRENTPOSITION,
  GETCURRENTPOSITIONIP,
} from "../Types/LocationTypes";

const locationState = {
  currentCityWeather: null,
  currentCoords: null,
  ip: null
};

export const locationReducer = (state = locationState, action) => {
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
