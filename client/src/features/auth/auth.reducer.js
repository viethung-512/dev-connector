import { SET_AUTH_USER, LOGOUT_USER } from './auth.constants';

const authReducerInitialState = {
  authenticated: null,
  user: {},
};
const authReducer = (state = authReducerInitialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authenticated: true,
        user: payload.user,
      };
    case LOGOUT_USER:
      return authReducerInitialState;
    default:
      return state;
  }
};

export default authReducer;
