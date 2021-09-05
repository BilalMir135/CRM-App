import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {useAuth} from '../state/auth/hooks';

const AppNavContainer = () => {
  const {isloggedIn} = useAuth();

  return (
    <NavigationContainer>
      {isloggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
