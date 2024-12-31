import {
  USER_SIGNUP,
  USER_SIGNIN,
  USER_PASSWORD,
  STORE_USER,
  REMOVE_USER,
} from "./actionType";

//define function of action creator
export const userSignUp = () => {
  return {
    type: USER_SIGNUP,
  };
};
export const userSignIn = () => {
  return {
    type: USER_SIGNIN,
  };
};
export const userPassword = () => {
  return {
    type: USER_PASSWORD,
  };
};
export const storeUser = (users) => {
  return {
    type: STORE_USER,
    payload: users,
  };
};
export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
