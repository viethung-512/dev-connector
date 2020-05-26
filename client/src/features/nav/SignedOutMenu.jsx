import React from 'react';
import { Menu } from 'antd';

function SignedOutMenu({ register, login }) {
  return (
    <Menu className='menubar' mode='horizontal'>
      <Menu.Item className='menubar-item' key='developer'>
        Developers
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
