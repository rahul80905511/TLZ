import React, {useEffect, useState} from 'react';
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
import vectorimg from '../../assests/Vector.png';
import {
  PASSPORTDATAKEY,
  PERSONALDETAILS,
  getData,
  storeData,
} from '../../utils/storage';
import ProgressBar from '../../components/ProgressBar';

const {width, height} = Dimensions.get('window');

const PersonalDetails = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [currentNationality, setCurrentNationality] = useState('');

  const savePersonalInfo = function () {
    storeData(PERSONALDETAILS, {
      firstName,
      middleName,
      lastName,
      gender,
      dob,
      currentNationality,
    })
      .then(() => {
        navigation.navigate('contactInformation');
      })
      .catch(err => {
        Alert.alert('Error', 'Something went wrong');
      });
  };

  useEffect(() => {
    getData(PASSPORTDATAKEY).then(data => {
      setFirstName(data.given_name);
      setMiddleName(data.middle_name);
      setLastName(data.surname);
      setGender(data.gender);
      setDob(data.date_of_birth);
      setCurrentNationality(data.nationality);
    });
  }, []);

  return (
    <View style={{backgroundColor: '#fff'}}>
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
          progress={0.18}
          label="Progress"
          height={20}
          color="#004A70"
          unfilledColor="#E0E0E0"
        />
      </View>
        <View style={{marginLeft: '11%', marginTop: '1%'}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1D242D'}}>
            Personal Details
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Middle Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={middleName}
            onChangeText={setMiddleName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={gender}
            onChangeText={setGender}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={dob}
            onChangeText={setDob}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Current Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={currentNationality}
            onChangeText={setCurrentNationality}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainerbtn}
            onPress={savePersonalInfo}>
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
    top: '5%',
    width: '100%',
    alignItems: 'center',
  },
  bellImage: {
    // marginLeft: '8%',
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
    color:'#546881'
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

export default PersonalDetails;
