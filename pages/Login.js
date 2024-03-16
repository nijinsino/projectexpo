import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signInWithEmailAndPassword } from 'firebase/auth';  


const Login = ({ navigation }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password) 
      .then(() => {
        console.log("Login success");
        alert("Login success");
        navigation.navigate('Home1');
      })
      .catch((error) => {
        console.error('Login unsuccessful', error);
      });
  };

  return (
    <ImageBackground source={{uri: 'https://thumbs.dreamstime.com/b/young-plant-nursery-bags-142747580.jpg?w=768'}} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="user-circle" size={70} color="red" />
        </View>

        <View style={styles.box1}>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Enter your email" 
            placeholderTextColor="black"
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter your password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('registration')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: 305,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    padding: 7,
    paddingHorizontal: 130,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  box1: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: 'white',
  },
  signupLink: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default Login;
