import React, { Fragment } from 'react';
import './App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Toastr from './common/Toastr';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import LoginForm from '../../features/auth/Login/LoginForm';
import RegisterForm from '../../features/auth/Register/RegisterForm';
import ModalManger from '../../features/modal/ModalManger';

const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <ModalManger />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          render={() => (
            <Fragment>
              <Header className='header'>
                <Navbar />
              </Header>

              <Content className='content'>
                <Switch>
                  <Route exact path='/login' component={LoginForm} />
                  <Route exact path='/register' component={RegisterForm} />
                </Switch>
              </Content>
            </Fragment>
          )}
        />
      </Switch>
      <Toastr />
    </div>
  );
}

export default App;
