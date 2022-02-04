import { GETLATESTNEWS } from "../Types/MainTypes";

const mainState = {
latestNews: null
};

export const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case GETLATESTNEWS: {
      return {
        ...state,
        latestNews: action.payload
      };
    }

    default:
      return state;
  }
};
