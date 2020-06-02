import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { CodeIcon } from '../../app/layout/common/Icons';
import { openModal } from '../modal/modal.actions';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { logout } from '../auth/auth.actions';
import { MenuOutlined } from '@ant-design/icons';
import { openDrawer } from '../drawer/drawer.actions';

const { Header } = Layout;

function Navbar(props) {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector(state => state.auth);

  const login = () => dispatch(openModal('ModalLogin'));
  const register = () => dispatch(openModal('ModalRegister'));
  const handleLogout = () => dispatch(logout());
  const openMenuMobile = () => dispatch(openDrawer('MenuMobileDrawer'));

  return (
    <Header className='header'>
      <Link className='logo' to='/'>
        <CodeIcon className='logo__icon' />
        DevConnector
      </Link>
      {authenticated ? (
        <SignedInMenu authUser={user} logout={handleLogout} />
      ) : (
        <SignedOutMenu login={login} register={register} />
      )}
      <Button
        className='menubar--sm'
        icon={<MenuOutlined />}
        onClick={openMenuMobile}
      />
    </Header>
  );
}

export default Navbar;
