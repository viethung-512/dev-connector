import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar, Typography } from 'antd';
import { LogoutOutlined, ProfileOutlined } from '@ant-design/icons';

function SignedInMenu({ authUser, logout }) {
  const { name = '', avatar = '' } = authUser;

  const signedInMenu = (
    <Menu mode='vertical'>
      <Menu.Item key='profile' icon={<ProfileOutlined />}>
        <Link to='/profile/me'>
          <Typography.Text>My Profile</Typography.Text>
        </Link>
      </Menu.Item>
      <Menu.Item key='logout' icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Menu className='menubar' mode='horizontal' defaultSelectedKeys='posts'>
      <Menu.Item className='menubar-item' key='developer'>
        <NavLink
          to='/developers'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          Developers
        </NavLink>
      </Menu.Item>
      <Menu.Item className='menubar-item' key='posts'>
        <NavLink
          to='/posts'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          Posts
        </NavLink>
      </Menu.Item>
      <Menu.Item className='menubar-item' key='dashboard'>
        <NavLink
          to='/dashboard'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          Dashboard
        </NavLink>
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
