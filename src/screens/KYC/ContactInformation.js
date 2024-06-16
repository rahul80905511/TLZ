import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import { CONTACTINFORMATION, storeData } from '../../utils/storage';

const ContactInformation = ({navigation}) => {
  const [localMobNumber, setlocalMobNumber] = useState('');
  const [abroadMobNumber, setabroadMobNumber] = useState('');
  const [email, setEmail] = useState('');
  
  
  const saveContactInfo = function() {
    storeData(CONTACTINFORMATION,{
        localMobNumber,abroadMobNumber,email
    }).then(() => {
        navigation.navigate('uaeaddrInfo');
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
        Contact Information
      </Text>
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Local Mobile No.</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={localMobNumber}
        onChangeText={setlocalMobNumber}
      />
    </View>
    

    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Abroad Mobile No.</Text>
      <TextInput
        style={styles.input}
        placeholder='Type here'
        value={abroadMobNumber}
        onChangeText={setabroadMobNumber}
      />
    </View>

    <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>Email</Text>
    <TextInput
      style={styles.input}
      placeholder='Type here'
      value={email}
      onChangeText={setEmail}
    />
  </View>

  <TouchableOpacity style={styles.button}  onPress={saveContactInfo}>
  <Text style={styles.buttonText}>Continue</Text>
</TouchableOpacity>
  </ScrollView>
   <View style={{position:'relative',top:85}}>
   <Footer/>
   </View>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ContactInformation;
