import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Container, Input, Button} from '../../components/common';
import {REGISTER} from '../../constants/routeNames';

const Login = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImg}
        source={require('../../assets/images/logo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome to Contaxts</Text>
        <Text style={styles.subtitle}>Please login here</Text>
      </View>

      <View style={styles.form}>
        <Input label="Username" placeholder="Enter Username" />
        <Input
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          icon={<Text>HIDE</Text>}
          iconPosition="right"
        />
        <Button type="primary" title="Submit" />
      </View>

      <View style={styles.registerSection}>
        <Text style={styles.info}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.linkBtn}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;
