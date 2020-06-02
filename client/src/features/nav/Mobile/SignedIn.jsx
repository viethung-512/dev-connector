import React from 'react';
import { Menu, Dropdown, Avatar, Typography } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { ProfileOutlined, LogoutOutlined } from '@ant-design/icons';

const { Text } = Typography;

function SignedIn({ authUser, logout, closeMenuMobile }) {
  const handleLogout = () => {
    logout();
    closeMenuMobile();
  };

  const signedInMenu = (
    <Menu mode='vertical'>
      <Menu.Item
        key='profile'
        icon={<ProfileOutlined />}
        onClick={closeMenuMobile}
      >
        <Link to='/profile/me'>
          <Text>My Profile</Text>
        </Link>
      </Menu.Item>
      <Menu.Item key='logout' icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu mode='vertical' defaultSelectedKeys='posts' theme='light'>
      <Menu.Item key='developer' onClick={closeMenuMobile}>
        <NavLink
          to='/developers'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          <Text>Developers</Text>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='posts' onClick={closeMenuMobile}>
        <NavLink
          to='/posts'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          <Text>Posts</Text>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='dashboard' onClick={closeMenuMobile}>
        <NavLink
          to='/dashboard'
          className='menubar-item-link'
          activeClassName='menubar-item-link--active'
        >
          <Text>Dashboard</Text>
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      {authUser && (
        <Menu.Item key='auth'>
          <Dropdown overlay={signedInMenu}>
            <span
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Avatar
                src={authUser.avatar}
                alt={authUser.name}
                className='avatar'
              />
              {authUser.name}
            </span>
          </Dropdown>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default SignedIn;
