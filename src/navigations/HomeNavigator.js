import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import {ContactDetail, Contacts, CreateContact, Settings} from '../screens';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
