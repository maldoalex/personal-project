import { UserTypes } from "./user-types";

const INITTIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
