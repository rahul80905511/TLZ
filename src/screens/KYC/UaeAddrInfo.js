import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import { UAEADDRINFO, storeData } from '../../utils/storage';

const UaeAddrInfo = ({navigation}) => {
  const [addrLine1, setAddrLine1] = useState('');
  const [addrLine2, setAddrLine2] = useState('');
  const [poBox, setPoBox] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [country, setCountry] = useState('');

  const saveUaeAddrInfo = function() {
    storeData(UAEADDRINFO,{
        addrLine1,addrLine2,poBox,postalCode,city,stateProvince,country
    }).then(() => {
        navigation.navigate('homeAddrInfo');
    }).catch((err)=>{
      Alert.alert("Error","Something went wrong");
    })
  }
  

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
        UAE Address Information
      </Text>
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Address Line 1</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={addrLine1}
        onChangeText={setAddrLine1}
      />
    </View>
    

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Address Line 2</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={addrLine2}
        onChangeText={setAddrLine2}
      />
    </View>

    <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>PO Box</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={poBox}
      onChangeText={setPoBox}
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Postal Code</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={postalCode}
      onChangeText={setPostalCode}
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>City</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={city}
      onChangeText={setCity}
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>State Province</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={stateProvince}
      onChangeText={setStateProvince}
    />
  </View>

  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Country</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={country}
      onChangeText={setCountry}
    />
  </View>

  <TouchableOpacity style={styles.button} onPress={saveUaeAddrInfo}>
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

export default UaeAddrInfo;
