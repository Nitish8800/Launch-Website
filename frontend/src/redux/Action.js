import {
  LOGOUT,
  SET_INPUT_LOGIN_PASSWORD,
  SET_INPUT_VALUE,
  SET_TOKEN,
  SET_TOKEN_STATUS,
  USER_DATA,
} from "./Action.Type";

export const setInputValue = (value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: value,
  };
};

export const setInputLoginPassword = (value) => {
  return {
    type: SET_INPUT_LOGIN_PASSWORD,
    payload: value,
  };
};

export const set_Token = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const Set_token_status = (status) => {
  return {
    type: SET_TOKEN_STATUS,
    payload: status,
  };
};

export const set_user_data = (user) => {
  return {
    type: USER_DATA,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
