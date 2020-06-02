import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

function SignedOutMenu({ register, login }) {
  return (
    <Menu className='menubar' mode='horizontal'>
      <Menu.Item className='menubar-item' key='developer'>
        <NavLink
          to='/developers'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          Developers
        </NavLink>
      </Menu.Item>
      <Menu.Item className='menubar-item' key='register' onClick={register}>
        Register
      </Menu.Item>
      <Menu.Item className='menubar-item' key='login' onClick={login}>
        Login
      </Menu.Item>
    </Menu>
  );
}

export default SignedOutMenu;
