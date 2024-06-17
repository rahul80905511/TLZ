import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import user from '../../assests/user.png';
import password from '../../assests/password.png';
import hide from '../../assests/hide.png';
import rectangleButton from '../../assests/rectangleButton.png';

const {width, height} = Dimensions.get('window');

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assests/sliderbg.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assests/TLZ-Logo.png')}
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.labelText}>Username</Text>
      <View style={styles.inputContainer}>
        <Image source={user} />
        <TextInput
          style={styles.input}
          placeholder="User Name"
          placeholderTextColor="#a9a9a9"
        />
      </View>
      <Text style={styles.labelText}>Password</Text>
      <View style={styles.inputContainer}>
        <Image source={password} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a9a9a9"
          secureTextEntry
        />
        <Image source={hide} />
      </View>
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.replace('forgotPassword')}
        accessibilityLabel="Forgot Password"
        accessibilityHint="Navigate to the forgot password screen">
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.replace('appJourney')}
        accessibilityLabel="Log in"
        accessibilityHint="Navigate to the app journey screen">
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity style={{marginTop:'3%'}}>
        <Image source={rectangleButton} style={{width: width * 0.8,height:40}} />

        <Text style={{position: 'absolute', color: 'white', left: '40%',top:'25%'}}>
          Log in
        </Text>
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
    padding: 20,
  },
  image: {
    width: width,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  logoImage: {
    width: width * 0.8,
    height: height * 0.1,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
    color: '#000',
  },
  labelText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontFamily: 'Helvetica Neue',
    flex: 1,
    fontSize: 16,
    marginLeft: '2%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 0,
  },
  forgotPasswordText: {
    fontFamily: 'Helvetica Neue',
    color: '#074E76',
    fontWeight: 'bold',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#074E76',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    fontFamily: 'Helvetica Neue',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
