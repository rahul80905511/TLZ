import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions,Image } from 'react-native';
import { PASSPORTDATAKEY, storeData } from '../utils/storage';
import bell from '../assests/bell.png'
import Stepper from '../utils/Stepper';
import Footer from './Footer';

const { width, height } = Dimensions.get('window');

function ExtractedPassportInfo({ navigation,route }) {

    const extractedData = route.params;
    storeData(PASSPORTDATAKEY,extractedData.passportData.data.result.extraction_output);
  return (
    <View>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
          <Text style={{ fontSize: 20 }}>
            KYC & Compliance
          </Text>
          <Image
            source={bell}
            style={styles.bellImage}
          />
        </View>

        <View style={{width:'100%'}}>
        <Stepper/>
        </View>
        <Text style={styles.forgotText}>Passport Information</Text>

        <Text style={styles.levelText}>Passport Number</Text>
        <TextInput
          style={styles.input}
          placeholder="LM059889"
          placeholderTextColor="#a9a9a9"
          value={extractedData.passportData.data.result.extraction_output.id_number}
        />

        <Text style={styles.levelText}>Passport Issue Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Date-of-issue"
          placeholderTextColor="#a9a9a9"
          value={extractedData.passportData.data.result.extraction_output.date_of_issue}
        />

        <Text style={styles.levelText}>Passport Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="expiry"
          placeholderTextColor="#a9a9a9"
          value={extractedData.passportData.data.result.extraction_output.date_of_expiry}
        />

        <Text style={styles.levelText}>Place Of issue</Text>
        <TextInput
          style={styles.input}
          placeholder="place of issue"
          placeholderTextColor="#a9a9a9"
          value={extractedData.passportData.data.result.extraction_output.place_of_issue}
        />

        <Text style={styles.levelText}>Country Of issue</Text>
        <TextInput
          style={styles.input}
          placeholder="Country of issue"
          placeholderTextColor="#a9a9a9"
          value={extractedData.passportData.data.result.extraction_output.country_code}
        />   

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('personalDetails')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <Footer/>
    </View>
  );
}

export default ExtractedPassportInfo;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  forgotText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    alignSelf: 'flex-start',
    color:'#1D242D'
  },
  levelText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
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
  otpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#074E76',
    paddingVertical: 15,
    paddingHorizontal: "30%",
    borderRadius: 5,
    marginTop: 10,
    marginBottom:'20%'
  },
  otpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    top: '1%',
    width:'100%',
    alignItems:'center'
  },
  bellImage:{
     marginLeft:'5%'
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
    marginBottom: '30%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
