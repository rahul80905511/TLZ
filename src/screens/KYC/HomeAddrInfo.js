import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  ImageBackground,
} from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import {HOMEADDRINFO, storeData} from '../../utils/storage';
import vectorimg from '../../assests/Vector.png';
import ProgressBar from '../../components/ProgressBar';
const {width, height} = Dimensions.get('window');

const HomeAddrInfo = ({navigation}) => {
  const [addrLine1, setAddrLine1] = useState('');
  const [addrLine2, setAddrLine2] = useState('');
  const [poBox, setPoBox] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [country, setCountry] = useState('');

  const saveHomeAddrInfo = function () {
    storeData(HOMEADDRINFO, {
      addrLine1,
      addrLine2,
      poBox,
      postalCode,
      city,
      stateProvince,
      country,
    })
      .then(() => {
        navigation.navigate('martialInfo');
      })
      .catch(err => {
        Alert.alert('Error', 'Something went wrong');
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={vectorimg} style={styles.bellImage} />
          </TouchableOpacity>

          <Text style={{fontSize: 20, color: '#3D4C5E'}}>KYC & Compliance</Text>
          <Image source={bell} style={styles.bellImage} />
        </View>
        <View style={{marginTop: '10%'}}>
          <Stepper currentPosition={3} />
        </View>
        <View style={{width: '100%'}}>
          <ProgressBar
            progress={0.45}
            label="Progress"
            height={20}
            color="#004A70"
            unfilledColor="#E0E0E0"
          />
        </View>
        <View style={{marginLeft: '11%', marginTop: '1%'}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1D242D'}}>
            Home Address Information
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={addrLine1}
            onChangeText={setAddrLine1}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={addrLine2}
            onChangeText={setAddrLine2}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>PO Box</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={poBox}
            onChangeText={setPoBox}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Postal Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={postalCode}
            onChangeText={setPostalCode}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>State Province</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={stateProvince}
            onChangeText={setStateProvince}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={country}
            onChangeText={setCountry}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainerbtn}
            onPress={saveHomeAddrInfo}>
            <ImageBackground
              source={require('../../assests/rectangleButton.png')}
              style={styles.imageBackground}>
              <Text style={styles.buttonTextfoot}>Continue</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerbtn: {
    width: width * 0.7,
    height: height * 0.06,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: '20%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextfoot: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    top: '4%',
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    marginLeft: '11%',
    marginTop: '3%',
  },
  inputLabel: {
    color: '#546881',
    fontWeight: '500',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#eef0f1',
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    borderRadius: 8,
    marginTop: '4%',
    width: '90%',
    color: '#546881',
  },
  button: {
    backgroundColor: '#074E76',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: '11%',
    width: '80%',
    alignItems: 'center',
    marginBottom: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeAddrInfo;
