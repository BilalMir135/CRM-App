import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LOGIN, REGISTER} from '../constants/routeNames';
import {Login, Register} from '../screens';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
