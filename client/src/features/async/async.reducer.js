import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from './async.constants';

const asyncReducerInitialState = {
  loading: false,
  type: null,
  id: null,
  errors: null,
};
const asyncReducer = (state = asyncReducerInitialState, { type, payload }) => {
  switch (type) {
    case ASYNC_ACTION_START:
      const { actionType, elmId } = payload;

      return {
        ...state,
        loading: true,
        type: actionType,
        id: elmId,
        errors: null,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        loading: false,
        type: null,
        id: null,
        errors: null,
      };
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        type: null,
        id: null,
        errors: payload.err,
      };
    default:
      return state;
  }
};

export default asyncReducer;
