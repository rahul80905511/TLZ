import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/sliderbg.png')}
        style={styles.image}
      />
      <Image source={require('../../assests/TLZ-Logo.png')} style={styles.logoimage} />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.levelText}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#a9a9a9"
      />
       <Text style={styles.levelText}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a9a9a9"
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.replace('forgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('appJourney')}>
        <Text style={styles.loginButtonText} >Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width:"100%",
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  logoimage:{
    width: '100%',
    height: '13%',
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    color:"#000",
  },
  levelText:{
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    alignSelf: 'flex-start',
    color:"#000",
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#000',
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#074E76',
    paddingVertical: 6,
    paddingHorizontal: "25%",
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});