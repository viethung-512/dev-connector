import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

function HeaderTop({ updateProfile, profile, isAuth }) {
  return (
    <Space>
      <Link to='/developers'>
        <Button type='default'>Back To Profiles</Button>
      </Link>
      {isAuth && (
        <Button
          type='link'
          className='profile-detailed__btn-edit'
          onClick={() => updateProfile(profile)}
        >
          Edit Profile
        </Button>
      )}
    </Space>
  );
}

export default HeaderTop;
