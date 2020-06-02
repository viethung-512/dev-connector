import React from 'react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

function MobileMenu({
  authUser,
  authenticated,
  logout,
  closeMenuMobile,
  register,
  login,
}) {
  return (
    <div>
      {authenticated ? (
        <SignedIn
          authUser={authUser}
          logout={logout}
          closeMenuMobile={closeMenuMobile}
        />
      ) : (
        <SignedOut
          register={register}
          login={login}
          closeMenuMobile={closeMenuMobile}
        />
      )}
    </div>
  );
}

export default MobileMenu;
