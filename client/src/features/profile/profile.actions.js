import axios from 'axios';
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish,
} from '../async/async.actions';
import {
  SET_CURRENT_PROFILE,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
} from './profile.constants';
import { toastr } from 'react-redux-toastr';
import { closeModal } from '../modal/modal.actions';
import { logout } from '../auth/auth.actions';

export const profileActions = (profileInfo, edit = false) => async dispatch => {
  dispatch(asyncActionStart('profileAction'));
  const successMessage = edit
    ? 'Your profile has been updated'
    : 'Your profile has been created';

  try {
    const res = await axios.post('/api/profile', profileInfo);
    const profile = res.data;

    dispatch({ type: SET_CURRENT_PROFILE, payload: { profile } });
    dispatch(asyncActionFinish());
    dispatch(closeModal());
    toastr.success('Success', successMessage);
  } catch (err) {
    dispatch(asyncActionError(err));
    toastr.error('Oops', 'Something went wrong, please try again');
  }
};

export const getAuthProfile = history => async dispatch => {
  dispatch(asyncActionStart('getProfile'));

  try {
    const res = await axios.get('/api/profile/me');
    const profile = res.data;

    dispatch({ type: SET_CURRENT_PROFILE, payload: { profile } });
    dispatch(asyncActionFinish());
    if (history) {
      history.push('/dashboard');
    }
  } catch (err) {
    if (
      err.response.data.msg === 'There is no profile for this user' &&
      history
    ) {
      history.push('/dashboard');
    }
    dispatch(
      asyncActionError({
        msg: err.response.statusText,
        status: err.response.status,
      })
    );
  }
};

export const addExperience = experience => async dispatch => {
  dispatch(asyncActionStart('addExperience'));

  try {
    const res = await axios.put('/api/profile/experience', experience);
    const profile = res.data;

    dispatch({
      type: ADD_EXPERIENCE,
      payload: { experience: profile.experience },
    });
    dispatch(asyncActionFinish());
    dispatch(closeModal());
    toastr.success('Success', 'Experience has been added');
  } catch (err) {
    dispatch(asyncActionError(err));
    toastr.error('Oops', 'Some thing went wrong, please try again');
  }
};

export const addEducation = education => async dispatch => {
  dispatch(asyncActionStart('addEducation'));

  try {
    const res = await axios.put('/api/profile/education', education);
    const profile = res.data;

    dispatch({
      type: ADD_EDUCATION,
      payload: { education: profile.education },
    });
    dispatch(asyncActionFinish());
    dispatch(closeModal());
    toastr.success('Success', 'Education has been added');
  } catch (err) {
    dispatch(asyncActionError(err));
    toastr.error('Oops', 'Some thing went wrong, please try again');
  }
};

export const deleteExperience = exId => async dispatch => {
  toastr.confirm('Are your sure you want to delete this experience?', {
    onOk: async () => {
      dispatch(asyncActionStart('deleteExperience', exId));

      try {
        await axios.delete(`api/profile/experience/${exId}`);

        dispatch({ type: DELETE_EXPERIENCE, payload: { exId } });
        dispatch(asyncActionFinish());
        toastr.success('Success', 'Experience has been deleted!');
      } catch (err) {
        dispatch(asyncActionError(err));
        toastr.error('Oops', 'Some thing went wrong, please try again');
      }
    },
  });
};

export const deleteEducation = edId => dispatch => {
  toastr.confirm('Are your sure you want to delete this education?', {
    onOk: async () => {
      dispatch(asyncActionStart('deleteEducation', edId));

      try {
        await axios.delete(`api/profile/education/${edId}`);

        dispatch({ type: DELETE_EDUCATION, payload: { edId } });
        dispatch(asyncActionFinish());
        toastr.success('Success', 'Education has been deleted!');
      } catch (err) {
        dispatch(asyncActionError(err));
        toastr.error('Oops', 'Some thing went wrong, please try again');
      }
    },
  });
};

export const deleteAccount = () => dispatch => {
  toastr.confirm('Are your sure? This can NOT be undone', {
    onOk: async () => {
      dispatch(asyncActionStart('deleteAccount'));

      try {
        await axios.delete('api/profile');

        dispatch(logout());
        dispatch(asyncActionFinish());
        toastr.success('Success', 'Your account has been deleted');
      } catch (err) {
        dispatch(asyncActionError(err));
        toastr.error('Oops', 'Some thing went wrong, please try again');
      }
    },
  });
};
