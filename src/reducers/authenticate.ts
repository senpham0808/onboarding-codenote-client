import { Action } from "../constants/action";

const initialState = {
  isAuthenticated: false,
};

export default function authenticate(state = initialState, action) {
  switch(action.type) {
    case Action.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: state.isAuthenticated
      };
    default:
      return {...state};
  }
};
