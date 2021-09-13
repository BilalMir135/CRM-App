import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {login, registerUser, clearState} from './actions';

export const useAuth = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const loginF = useCallback(() => dispatch(login()), [dispatch, login]);
  const registerUserF = useCallback(
    data => dispatch(registerUser(data)),
    [dispatch, registerUser],
  );
  const clearStateF = useCallback(() => dispatch(clearState()), []);
  return {...auth, loginF, registerUserF, clearStateF};
};
