import {
  SEARCHCURRENTWEATHERBYCITYNAME,
  GETSEARCHCITYNAME,
} from "../Types/RecentCitiesTypes.js";

const recentCities = {
  recentCities: [],
  searchCityName: null,
};

export const recentCitiesReducer = (state = recentCities, action) => {
  switch (action.type) {
    case SEARCHCURRENTWEATHERBYCITYNAME: {
      return {
        ...state,
        recentCities: [...state.recentCities, action.payload],
      };
    }

    case GETSEARCHCITYNAME: {
      return {
        ...state,
        searchCityName: action.payload,
      };
    }

    default:
      return state;
  }
};
