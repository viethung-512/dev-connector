import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from './drawer.actions';
import MobileMenu from '../nav/Mobile/MobileMenu';
import { logout } from '../auth/auth.actions';
import { openModal } from '../modal/modal.actions';

function MenuMobileDrawer(props) {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector(state => state.auth);

  const closeMenuMobile = () => dispatch(closeDrawer());
  const handleLogout = () => dispatch(logout());
  const handleRegister = () => {
    dispatch(openModal('ModalRegister'));
    dispatch(closeDrawer());
  };
  const handleLogin = () => {
    dispatch(openModal('ModalLogin'));
    dispatch(closeDrawer());
  };

  return (
    <Drawer
      visible
      onClose={closeMenuMobile}
      width={320}
      headerStyle={{ backgroundColor: '#fff', height: 64 }}
    >
      <MobileMenu
        authUser={user}
        authenticated={authenticated}
        logout={handleLogout}
        closeMenuMobile={closeMenuMobile}
        register={handleRegister}
        login={handleLogin}
      />
    </Drawer>
  );
}

export default MenuMobileDrawer;
