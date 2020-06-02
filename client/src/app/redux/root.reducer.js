import { combineReducers } from 'redux';

import modalReducer from '../../features/modal/modal.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';
import asyncReducer from '../../features/async/async.reducer';
import authReducer from '../../features/auth/auth.reducer';
import profileReducer from '../../features/profile/profile.reducer';
import drawerReducer from '../../features/drawer/drawer.reducer';
import postReducer from '../../features/post/post.reducer';

export default combineReducers({
  modal: modalReducer,
  drawer: drawerReducer,
  toastr: toastrReducer,
  async: asyncReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});
