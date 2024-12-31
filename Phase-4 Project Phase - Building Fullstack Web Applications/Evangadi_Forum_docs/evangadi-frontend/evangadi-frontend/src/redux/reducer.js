import {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_PASSWORD,
  STORE_USER,
  REMOVE_USER,
} from "./actionType";
//define object state ( default initial state)
const initialState = {
  signup: false,
  user: "",
  password: false,
};

//define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        signup: true,
      };
    case USER_SIGNIN:
      return {
        ...state,
        signup: false,
      };
    case STORE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: "",
      };
    case USER_PASSWORD:
      let temp = false;
      if (state.password) {
        temp = false;
      } else {
        temp = true;
      }
      return {
        ...state,
        password: temp,
      };
    default:
      return state;
  }
};

export default reducer;
