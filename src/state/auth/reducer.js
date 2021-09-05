import {createReducer} from '@reduxjs/toolkit';

import {login} from './actions';

const initialState = {
  isloggedIn: false,
  data: {},
  error: null,
  loading: false,
};

const authReducer = createReducer(initialState, builder => {
  builder.addCase(login, state => {
    state.isloggedIn = true;
  });
});

export default authReducer;
