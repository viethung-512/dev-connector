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
import DevelopersPage from '../../features/profile/Developers/DevelopersPage';
import DrawerManger from '../../features/drawer/DrawerManger';
import ProfileDetail from '../../features/profile/ProfileDetailed/ProfileDetailed';
import PostPage from '../../features/post/post-component/PostPage';
import PostDetailed from '../../features/post/post-component/PostDetailed';

const { Content } = Layout;

function App() {
  return (
    <div>
      <ModalManger />
      <DrawerManger />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          render={() => (
            <Fragment>
              <Navbar />

              <Content className='content'>
                <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <Route exact path='/developers' component={DevelopersPage} />
                  <Route
                    exact
                    path={['/profile/me', '/profile/:userId']}
                    component={ProfileDetail}
                  />
                  <PrivateRoute exact path='/posts' component={PostPage} />
                  <PrivateRoute
                    exact
                    path='/posts/:postId'
                    component={PostDetailed}
                  />
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
