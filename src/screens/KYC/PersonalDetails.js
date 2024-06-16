import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import { PASSPORTDATAKEY, PERSONALDETAILS, getData, storeData } from '../../utils/storage';

const PersonalDetails = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [currentNationality, setCurrentNationality] = useState('');

  const savePersonalInfo = function() {
    storeData(PERSONALDETAILS,{
      firstName,middleName,lastName,gender,dob,currentNationality
    }).then(() => {
      navigation.navigate('contactInformation');
    }).catch((err)=>{
      Alert.alert("Error","Something went wrong");
    })
  } 

  useEffect(() => {
    getData(PASSPORTDATAKEY).then((data) => {
      setFirstName(data.given_name);
      setMiddleName(data.middle_name);
      setLastName(data.surname);
      setGender(data.gender);
      setDob(data.date_of_birth);
      setCurrentNationality(data.nationality);
    })
  }, [])


  

  return (
    <View>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.headerContainer}>
      <Text style={{ fontSize: 20 }}>
        KYC & Compliance
      </Text>
      <Image
        source={bell}
        style={{ position: 'absolute', right: '5%' }}
      />
    </View>
    <View style={{ marginTop: '10%' }}>
      <Stepper currentPosition={3} />
    </View>

    <View style={{ marginLeft: '11%', marginTop: '5%' }}>
      <Text style={{ fontSize: 18, fontWeight: '500', color: '#1D242D' }}>
        Personal Details
      </Text>
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={firstName}
        onChangeText={setFirstName}
      />
    </View>
    

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Middle Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={middleName}
        onChangeText={setMiddleName}
      />
    </View>

    <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Last Name</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={lastName}
      onChangeText={setLastName}
    />
  </View>

  <View style={styles.inputContainer}>
  <Text style={styles.inputLabel}>Gender</Text>
  <TextInput
    style={styles.input}
    placeholder='Type here'
    value={gender}
    onChangeText={setGender}
  />
</View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Date Of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder='DD/MM/YYYY'
        value={dob}
        onChangeText={setDob}
      />
    </View>

    <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Current Nationality</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={currentNationality}
      onChangeText={setCurrentNationality}
    />
  </View>

  <TouchableOpacity style={styles.button} onPress={savePersonalInfo}>
  <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>
  </ScrollView>
  <Footer/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    top: '6%',
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
    backgroundColor: '#E8EAF0',
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    borderRadius: 8,
    marginTop: '4%',
    width: '90%',
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
    marginBottom:'20%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PersonalDetails;
