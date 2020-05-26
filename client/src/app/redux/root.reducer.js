import { combineReducers } from 'redux';

import modalReducer from '../../features/modal/modal.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';
import asyncReducer from '../../features/async/async.reducer';
import authReducer from '../../features/auth/auth.reducer';

export default combineReducers({
  modal: modalReducer,
  toastr: toastrReducer,
  async: asyncReducer,
  auth: authReducer,
});
