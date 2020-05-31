import React, { Fragment } from 'react';
import './App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Toastr from './common/Toastr';
import Navbar from '../../features/nav/Navbar';
import HomePage from '../../features/home/HomePage';
import ModalManger from '../../features/modal/ModalManger';
import Dashboard from '../../features/dashboard/Dashboard';
import PrivateRoute from './common/PrivateRoute';

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
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
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
