import React from 'react';
import {View} from 'react-native';
import InputForm from '../components/InputForm';
import styles from '../styles';

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <InputForm />
      </View>
    </View>
  );
};
