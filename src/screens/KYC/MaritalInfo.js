import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import { MARITIALINFO, storeData } from '../../utils/storage';

const MaritalInfo = ({ navigation }) => {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [spouseNationality, setSpouseNationality] = useState('');
  const [spouseDob, setSpouseDob] = useState('');

  const saveMaritalInfo = function() {
    storeData(MARITIALINFO,{
        maritalStatus,spouseName,spouseNationality,spouseDob
    }).then(() => {
        navigation.navigate('familyBackground');
    }).catch((err)=>{
      Alert.alert("Error","Something went wrong");
    })
  }

  return (
    <View style={styles.container}>
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
          <Stepper currentPosition={5} />
        </View>

        <View style={{ marginLeft: '11%', marginTop: '5%' }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: '#1D242D' }}>
            Marital Information
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Marital Status</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={maritalStatus}
              onValueChange={(itemValue) => setMaritalStatus(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Marital Status" value="" />
              <Picker.Item label="Single" value="single" />
              <Picker.Item label="Married" value="married" />
              <Picker.Item label="Divorced" value="divorced" />
              <Picker.Item label="Widowed" value="widowed" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Spouse Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={spouseName}
            onChangeText={setSpouseName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Spouse Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={spouseNationality}
            onChangeText={setSpouseNationality}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Spouse DOB</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={spouseDob}
            onChangeText={setSpouseDob}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={saveMaritalInfo}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  pickerContainer: {
    backgroundColor: '#E8EAF0',
    borderRadius: 8,
    marginTop: '4%',
    width: '90%',
  },
  picker: {
    height: 50,
    width: '100%',
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

export default MaritalInfo;
