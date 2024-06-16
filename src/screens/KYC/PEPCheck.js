import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { PEPCHECK, storeData } from '../../utils/storage';

const PEPCheck = ({navigation}) => {
  const [answers, setAnswers] = useState([
    {id: 1, text: 'Do you currently hold any public position?', answer: null},
    {id: 2, text: 'Do you have or have you ever had any diplomatic immunity?', answer: null},
    {id: 3, text: 'Do you have a close associate who has held public position in the last 12 months?', answer: null},
    {id: 4, text: 'Did you hold any public position in the last 12 months?', answer: null},
    {id: 5, text: 'Have you ever held any public position?', answer: null},
    {id: 6, text: 'Do you have a relative who has held public position in the last 12 months?', answer: null},
    {id: 7, text: 'Has there been a conviction against you by a court of law?', answer: null},
    {id: 8, text: 'If you have answered yes to any of the questions above please provide details below?', answer: null},
  ]);

  const handleRadioChange = (id, value) => {
    const updatedAnswers = answers.map(item =>
      item.id === id ? {...item, answer: value} : item,
    );
    setAnswers(updatedAnswers);
  };

  const storePEPCheck = () => {
    storeData(PEPCHECK,answers)
    .then(() => {
        navigation.navigate('KYCSuccessScreen')
    }).catch((error)=>{
        Alert.alert("Error","Something went wrong")
    })
  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 20}}>PEP Check</Text>
          {/* Assuming the bell image path is correct */}
          <Image
            source={require('../../assests/bell.png')}
            style={{position: 'absolute', right: '5%'}}
          />
        </View>

        <View style={styles.questionsContainer}>
          {answers.map(item => (
            <View key={item.id} style={styles.questionItem}>
              <View style={styles.questionBorder}>
                <Text style={styles.questionText}>{item.text}</Text>
                <View style={styles.divider} />
                <View style={styles.radioButtonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.radioButton,
                      item.answer === true ? styles.radioButtonChecked : null,
                    ]}
                    onPress={() => handleRadioChange(item.id, true)}>
                    {item.answer === true && <View style={styles.radioInner} />}
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.radioLabel,
                      item.answer === true ? styles.radioLabelChecked : null,
                    ]}>
                    Yes
                  </Text>
                  <TouchableOpacity
                    style={[
                      styles.radioButton,
                      item.answer === false ? styles.radioButtonChecked : null,
                    ]}
                    onPress={() => handleRadioChange(item.id, false)}>
                    {item.answer === false && (
                      <View style={styles.radioInner} />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.radioLabel,
                      item.answer === false ? styles.radioLabelChecked : null,
                    ]}>
                    No
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Example of Continue button */}
        <TouchableOpacity
          style={styles.button}
          onPress={storePEPCheck}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
      {/*<Footer/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    top: '6%',
  },
  questionsContainer: {
    marginTop: '15%',
    marginLeft: '2%',
  },
  questionItem: {
    marginBottom: 20,
  },
  questionBorder: {
    borderWidth: 1,
    borderColor: 'light-gray',
    borderRadius: 8,
    overflow: 'hidden',
    // padding: 16,
  },
  questionText: {
    marginBottom: 16,
    marginLeft: 10,
    fontSize: 16,
    color: '#000', // text color
    paddingHorizontal: '3%',
    paddingVertical:"1%"
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    backgroundColor: '#E8EAF0',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  radioButtonChecked: {
    backgroundColor: '#074E76', // background color when checked
    borderColor: '#074E76', // border color when checked
  },
  radioInner: {
    width: 12,
    height: 12,
    backgroundColor: 'white', // inner color when checked
    borderRadius: 6,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000', // default text color
  },
  radioLabelChecked: {},
  button: {
    backgroundColor: '#074E76',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    borderBottomColor: '#CED0CE',
    borderBottomWidth: 1,
  },
});

export default PEPCheck;
