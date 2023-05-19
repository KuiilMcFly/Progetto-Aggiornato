import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from '../styles';
import { useState } from 'react';

const InputForm = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (key, value) => {
    setFormState({...formState, [key]: value})
  }

  const handleSubmit = async () => {
    console.warn(formState);
    try {
        
    } catch (error) {
        console.log(error);
    }
    setFormState({ email: '', password: '' });
  }

  return (
    <View style={styles.containerForm}>
      <Text style={styles.formFont}>E-mail</Text>
        <Input 
        style={styles.inputStyle} 
        inputContainerStyle={{ width: 300 }}
        value={formState.email}
        onChangeText={(text) => handleChange('email', text)}
        />

      <Text style={styles.formFont}>Password</Text>
        <Input 
        secureTextEntry={true} 
        style={styles.inputStyle} 
        inputContainerStyle={{ width: 300 }}
        value={formState.password}
        onChangeText={(text) => handleChange('password', text)}
        />

        <View style={styles.buttonStyle}>
          <Button onPress={handleSubmit} title={'Registrati'}/>
          <Button title={'Log in'}/>
        </View>
    </View>
  );
};


export default InputForm;