import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

// react router setup
import { BrowserRouter } from 'react-router-dom';
// redux setup
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { loadAuthenticatedUser } from './features/auth/auth.actions';
import { getAuthProfile } from './features/profile/profile.actions';

const rootEl = document.getElementById('root');

if (localStorage.getItem('token')) {
  store.dispatch(loadAuthenticatedUser());
  store.dispatch(getAuthProfile());
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
