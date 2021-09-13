import {useState, useCallback} from 'react';

import {useAuth} from '../state/auth/hooks';

export const useRegisterFormData = () => {
  const {registerUserF} = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

  const handleChange = useCallback(({name, value}) => {
    setFormData(prevState => ({...prevState, [name]: value}));

    if (value.trim() !== '') {
      setError(prevState => ({...prevState, [name]: null}));
    } else {
      setError(prevState => ({
        ...prevState,
        [name]: `Please add ${name.toLowerCase()}`,
      }));
    }
  }, []);

  const handleSubmit = useCallback(() => {
    let validated = true;
    for (const key in formData) {
      if (!formData[key]) {
        setError(prevState => ({
          ...prevState,
          [key]: `Please add ${key.toLowerCase()}`,
        }));
        validated = false;
      }
    }

    if (validated) {
      const {username, email, firstName, lastName, password} = formData;
      registerUserF({
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      });
    }
  }, [formData]);

  return {formData, error, handleChange, handleSubmit};
};
