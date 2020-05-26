import axios from 'axios';

export const setAuthToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};
