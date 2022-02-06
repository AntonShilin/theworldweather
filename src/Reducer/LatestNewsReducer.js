import { GETLATESTNEWS } from "../Types/LatestNewsTypes";

const latestNewsState = {
latestNews: null
};

export const latestNewsReducer = (state = latestNewsState, action) => {
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
