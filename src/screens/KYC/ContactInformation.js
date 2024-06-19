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
  ImageBackground,
  Dimensions,
} from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import {CONTACTINFORMATION, storeData} from '../../utils/storage';
import vectorimg from '../../assests/Vector.png';
import ProgressBar from '../../components/ProgressBar';
const {width, height} = Dimensions.get('window');

const ContactInformation = ({navigation}) => {
  const [localMobNumber, setlocalMobNumber] = useState('');
  const [abroadMobNumber, setabroadMobNumber] = useState('');
  const [email, setEmail] = useState('');

  const saveContactInfo = function () {
    storeData(CONTACTINFORMATION, {
      localMobNumber,
      abroadMobNumber,
      email,
    })
      .then(() => {
        navigation.navigate('uaeaddrInfo');
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
            progress={0.27}
            label="Progress"
            height={20}
            color="#004A70"
            unfilledColor="#E0E0E0"
          />
        </View>
        <View style={{marginLeft: '11%', marginTop: '5%'}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1D242D'}}>
            Contact Information
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Local Mobile No.</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={localMobNumber}
            onChangeText={setlocalMobNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Abroad Mobile No.</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={abroadMobNumber}
            onChangeText={setabroadMobNumber}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainerbtn}
            onPress={saveContactInfo}>
            <ImageBackground
              source={require('../../assests/rectangleButton.png')}
              style={styles.imageBackground}>
              <Text style={styles.buttonTextfoot}>Continue</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{position: 'relative', top: 22}}>
        <Footer />
      </View>
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
    width: width * 0.79,
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
    top: '1%',
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  inputContainer: {
    marginLeft: '11%',
    marginTop: '7%',
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ContactInformation;
