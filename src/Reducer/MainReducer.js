

const mainState = {

};

export const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case "1": {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
