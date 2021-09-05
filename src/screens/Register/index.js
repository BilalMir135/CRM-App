import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Container, Input, Button} from '../../components/common';
import {LOGIN} from '../../constants/routeNames';

const Register = () => {
  const {navigate} = useNavigation();

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
        <Input label="Username" placeholder="Enter Username" />
        <Input label="First name" placeholder="Enter First name" />
        <Input label="Last name" placeholder="Enter Last name" />
        <Input label="Email" placeholder="Enter Email" />
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
        <Text style={styles.info}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Register;
