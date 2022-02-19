import {
  GETDAILYWEATHERBYCOORDS,
  GETCURRENTPOSITION,
  GETCURRENTPOSITIONIP,
  GETCITYNAMEBYCOORDS,
} from "../Types/LocationTypes";

const locationState = {
  dailyWeather: null,
  cityName: null,
  currentCoords: null,
  currentIPAdressInfo: null,
};

export const locationReducer = (state = locationState, action) => {
  switch (action.type) {
    case GETDAILYWEATHERBYCOORDS: {
      return {
        ...state,
        dailyWeather: action.payload.daily[0],
      };
    }

    case GETCITYNAMEBYCOORDS: {
      const { name, sys } = action.payload;
      return {
        ...state,
        cityName: { name, sys },
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
        currentIPAdressInfo: action.payload,
      };
    }

    default:
      return state;
  }
};
