import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Container, Input, Button} from '../../components/common';
import {LOGIN} from '../../constants/routeNames';
import {useRegisterFormData} from '../../hooks';
import {useAuth} from '../../state/auth/hooks';

const Register = () => {
  const {navigate} = useNavigation();
  const {error, handleChange, handleSubmit} = useRegisterFormData();
  const {loading, data, clearStateF} = useAuth();

  useEffect(() => {
    if (data) {
      clearStateF();
      navigate(LOGIN);
    }
  }, [data]);

  return (
    <Container>
      <Image
        style={styles.logoImg}
        source={require('../../assets/images/logo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome to Contaxts</Text>
        <Text style={styles.subtitle}>Create free account</Text>
      </View>

      <View style={styles.form}>
        <Input
          label="Username"
          placeholder="Enter Username"
          onChangeText={value => handleChange({name: 'username', value})}
          error={error.username}
        />
        <Input
          label="First name"
          placeholder="Enter First name"
          onChangeText={value => handleChange({name: 'firstName', value})}
          error={error.firstName}
        />
        <Input
          label="Last name"
          placeholder="Enter Last name"
          onChangeText={value => handleChange({name: 'lastName', value})}
          error={error.lastName}
        />
        <Input
          label="Email"
          placeholder="Enter Email"
          onChangeText={value => handleChange({name: 'email', value})}
          error={error.email}
        />
        <Input
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          onChangeText={value => handleChange({name: 'password', value})}
          error={error.password}
        />
        <Button
          type="primary"
          title="Submit"
          loading={loading}
          onPress={handleSubmit}
        />
      </View>

      <View style={styles.registerSection}>
        <Text style={styles.info}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;
