import {useState, useCallback} from 'react';

export const useRegisterFormData = () => {
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
    for (const key in formData) {
      if (!formData[key]) {
        setError(prevState => ({
          ...prevState,
          [key]: `Please add ${key.toLowerCase()}`,
        }));
      }
    }
  }, [formData]);

  return {formData, error, handleChange, handleSubmit};
};
