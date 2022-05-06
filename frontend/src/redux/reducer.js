import {
  LOGOUT,
  SET_INPUT_LOGIN_PASSWORD,
  SET_INPUT_VALUE,
  SET_TOKEN,
  SET_TOKEN_STATUS,
  USER_DATA,
} from "./Action.Type";

const InitialState = {
  login: {
    inputEmail: null,
    inputPassword: null,
  },
  token: null,
  tokenStatus: false,
  userdata: null,
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        login: {
          ...state.login,
          inputEmail: action.payload,
        },
      };
    case SET_INPUT_LOGIN_PASSWORD:
      return {
        ...state,
        login: {
          ...state.login,
          inputPassword: action.payload,
        },
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        tokenStatus: true,
      };

    case SET_TOKEN_STATUS:
      return {
        ...state,
        tokenStatus: action.payload,
      };

    case USER_DATA:
      return {
        ...state,
        userdata: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        tokenStatus: false,
        token: null,
        userdata: null,
      };

    default:
      return state;
  }
};
