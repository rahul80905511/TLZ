import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const labels = [
  'Step 1',
  'Step 2',
  'Step 3',
  'Step 4',
  'Step 5',
  'Step 6',
  'Step 7',
  'Step 8',
  'Step 9',
  'Finish',
];
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#074E76',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#0E8345',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#0E8345',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#0E8345',
  stepIndicatorUnFinishedColor: '#dedede',
  stepIndicatorCurrentColor: '#074E76',
  stepIndicatorLabelFontSize: 10,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#999999',
  labelColor: 'transparent', // Hide default labels
  labelSize: 0,
  currentStepLabelColor: 'transparent', // Hide default labels
};

const Stepper = ({currentPosition}) => (
  <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          stepCount={10}
          labels={[]} // Disable default labels
        />
        <View style={styles.labelsContainer}>
          {labels.map((label, index) => (
            <View key={index} style={styles.labelContainer}>
              <Text
                style={[
                  styles.label,
                  currentPosition > index && styles.finishedLabel,
                  currentPosition === index && styles.currentLabel,
                ]}>
                {label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  labelContainer: {
    width: 80, // Set a fixed width for each label container
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: '#999999',
    textAlign: 'center',
  },
  currentLabel: {
    color: '#074E76',
    fontWeight: 'bold',
  },
  finishedLabel: {
    color: '#0E8345',
    fontWeight: 'bold',
  },
});

export default Stepper;
