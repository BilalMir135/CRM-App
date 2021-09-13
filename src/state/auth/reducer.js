import {createReducer} from '@reduxjs/toolkit';

import {login, registerUser, clearState} from './actions';

const initialState = {
  isloggedIn: false,
  data: null,
  error: null,
  loading: false,
};

const authReducer = createReducer(initialState, builder => {
  builder.addCase(login, state => {
    state.isloggedIn = true;
  });
  builder.addCase(clearState, state => {
    state = initialState;
  });
  builder.addCase(registerUser.pending, state => {
    state.loading = true;
  });
  builder.addCase(registerUser.fulfilled, (state, action) => {
    state.data = action.payload;
    state.loading = false;
    state.error = null;
  });
  builder.addCase(registerUser.rejected, state => {
    state.data = null;
    state.error = 'Something went wrong';
    state.loading = false;
  });
});

export default authReducer;
