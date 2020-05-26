import React, { Fragment } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CodeIcon } from '../../app/layout/common/Icons';
import { openModal } from '../modal/modal.actions';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { logout } from '../auth/auth.actions';

function Navbar(props) {
  const dispatch = useDispatch();
  const { authenticated, user } = useSelector(state => state.auth);

  const login = () => dispatch(openModal('ModalLogin'));
  const register = () => dispatch(openModal('ModalRegister'));
  const handleLogout = () => dispatch(logout());

  return (
    <Fragment>
      <Link className='logo' to='/'>
        <CodeIcon className='logo__icon' />
        DevConnector
      </Link>
      {authenticated ? (
        <SignedInMenu authUser={user} logout={handleLogout} />
      ) : (
        <SignedOutMenu login={login} register={register} />
      )}
    </Fragment>
  );
}

export default Navbar;
