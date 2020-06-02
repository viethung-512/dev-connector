import React from 'react';
import { Menu } from 'antd';

function SignedOut({ register, login, closeMenuMobile }) {
  return (
    <Menu mode='vertical'>
      <Menu.Item key='developer' onClick={closeMenuMobile}>
        Developers
      </Menu.Item>
      <Menu.Item key='register' onClick={register}>
        Register
      </Menu.Item>
      <Menu.Item key='login' onClick={login}>
        Login
      </Menu.Item>
    </Menu>
  );
}

export default SignedOut;
