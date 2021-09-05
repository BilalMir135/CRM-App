import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {login} from './actions';

export const useAuth = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const loginF = useCallback(() => dispatch(login()), [dispatch, login]);
  return {...auth, loginF};
};
