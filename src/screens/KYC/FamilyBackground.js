import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import { FAMILYINFO, storeData } from '../../utils/storage';

const FamilyBackground = ({ navigation }) => {
  const [mothersname, setMothersName] = useState('');
  const [mothersnationality, setMothersNationality] = useState('');
  const [fathersname, setFatherName] = useState('');
  const [fathersnationality, setFathersNationality] = useState('');
  const [isUAEResident, setIsUAEResident] = useState(null);

  const saveFamilyInfo = function() {
    storeData(FAMILYINFO,{
        mothersname,mothersnationality,fathersname,fathersnationality,isUAEResident
    }).then(() => {
        navigation.navigate('emirateidUpload');
    }).catch((err)=>{
      Alert.alert("Error","Something went wrong");
    })
  }

  return (
    <View style={{ flex: 1 }}>
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
            Family Background
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Mother's Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={mothersname}
            onChangeText={setMothersName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Mother's Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={mothersnationality}
            onChangeText={setMothersNationality}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Father's Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={fathersname}
            onChangeText={setFatherName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Father's Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder='Type here'
            value={fathersnationality}
            onChangeText={setFathersNationality}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Is UAE Resident</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity style={styles.radioButton} onPress={() => setIsUAEResident(true)}>
              <View style={styles.radioOuter}>
                {isUAEResident === true && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioLabel}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButton} onPress={() => setIsUAEResident(false)}>
              <View style={styles.radioOuter}>
                {isUAEResident === false && <View style={styles.radioInner} />}
              </View>
              <Text style={styles.radioLabel}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={saveFamilyInfo}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ position: 'relative', bottom: 0, width: '100%' }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
};

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
    marginBottom: '20%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  radioGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#546881',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#546881',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#546881',
  },
});

export default FamilyBackground;
