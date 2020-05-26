import React from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { LogoutOutlined, ProfileOutlined } from '@ant-design/icons';

function SignedInMenu({ authUser, logout }) {
  const { name = '', avatar = '' } = authUser;

  const signedInMenu = (
    <Menu mode='vertical'>
      <Menu.Item key='profile' icon={<ProfileOutlined />}>
        My Profile
      </Menu.Item>
      <Menu.Item key='logout' icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Menu className='menubar' mode='horizontal' defaultSelectedKeys='posts'>
      <Menu.Item className='menubar-item' key='developer'>
        Developers
      </Menu.Item>
      <Menu.Item className='menubar-item' key='posts'>
        Posts
      </Menu.Item>
      <Menu.Item className='menubar-item' key='auth'>
        <Dropdown overlay={signedInMenu}>
          <span className='auth-menu'>
            <Avatar src={avatar} alt={name} className='avatar' />
            {name}
          </span>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
}

export default SignedInMenu;
