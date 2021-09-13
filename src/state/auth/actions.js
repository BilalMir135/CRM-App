import {createAction, createAsyncThunk} from '@reduxjs/toolkit';

import axios from '../../utils/axiosInstance';

export const login = createAction('auth/login');
export const clearState = createAction('auth/clearState');
export const registerUser = createAsyncThunk('auth/register', async data => {
  const res = await axios.post('auth/register', data);
  return res.data;
});
