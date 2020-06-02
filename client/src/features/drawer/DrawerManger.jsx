import React from 'react';
import { useSelector } from 'react-redux';
import MenuMobileDrawer from './MenuMobileDrawer';

const drawerLookup = { MenuMobileDrawer };

function DrawerManger(props) {
  const currentDrawer = useSelector(state => state.drawer);
  let renderDrawer;

  if (currentDrawer) {
    const { drawerType, drawerProps } = currentDrawer;
    const DrawerComponent = drawerLookup[drawerType];

    renderDrawer = <DrawerComponent {...drawerProps} />;
  }
  return <span>{renderDrawer}</span>;
}

export default DrawerManger;
