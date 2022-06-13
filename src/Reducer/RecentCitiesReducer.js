import {
    GETWEATHERBYCOORDS,
    ENTERCITYNAME,
} from "../Types/RecentCitiesTypes.js";

const recentCities = {
  recentCities: [],
  searchCityName: null,
};

export const recentCitiesReducer = (state = recentCities, action) => {
  switch (action.type) {
    case GETWEATHERBYCOORDS: {
      return {
        ...state,
        recentCities: [...state.recentCities, action.payload],
      };
    }

    case ENTERCITYNAME: {
      return {
        ...state,
        searchCityName: action.payload,
      };
    }

    default:
      return state;
  }
};
