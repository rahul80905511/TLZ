import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import bell from '../../assests/bell.png';
import Stepper from '../../utils/Stepper';
import ImagePickerButton from '../../components/ImagePickerButton';
import axios from 'axios';
import ImagePicker from '../../Testing/ImagePicker';
import { IMAGEDATAKEY, storeData } from '../../utils/storage';

const { width, height } = Dimensions.get('window');

const ESignScreen = ({ navigation }) => {
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleImage2Select = (imageUri) => {
    setSelectedImage2(imageUri);
    storeData(IMAGEDATAKEY,imageUri);
  };

  const showSuccessModal = () => {
    setModalMessage('Verification Successful!');
    setShowModal(true);
  };

  const showErrorModal = () => {
    setModalMessage('Verification Failed. Please check details.');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

//   const verify = async () => {
//     setIsLoading(true); // Show loader
//     navigation.navigate('passport');
//     showErrorModal();
//     showSuccessModal(); 
      
//   };

const saveAndContinue = async () => {
    setIsLoading(true); // Show loader
    if (selectedImage2){
        showSuccessModal();
        setTimeout(() => {
            navigation.navigate('pepCheck');
        }, 3000); 
    } else{
        showErrorModal();
    }
  
};

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>
            KYC & Compliance
          </Text>
          <Image source={bell} style={{ position: 'relative', left: 70 }} />
        </View>
        <View style={styles.stepperContainer}>
          <Stepper currentPosition={2} />
        </View>

        
        <View style={styles.passportContainer}>
        <View style={{ marginVertical: '5%' }}>
        {selectedImage2 && (
          <Image
            source={{ uri: selectedImage2.uri }}
            style={{
              width: width * 0.83,
              height: 178,
              position: 'relative',
              resizeMode: 'cover',
            }}
          />
        )}
      </View>
          <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>
            Drop your Signature Image
          </Text>
          <ImagePicker
            imagePickerCallback={handleImage2Select}
            captureImage={handleImage2Select}
          />
         
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={saveAndContinue}>
            <Text style={styles.buttonText}>Save & Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Loader */}
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}

        {/* Modal for success or error */}
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{modalMessage}</Text>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '7%',
  },
  stepperContainer: {
    marginTop: '3%',
  },
  passportContainer: {
    marginTop: '8%',
    marginLeft: '8%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#074E76',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#074E76',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ESignScreen;
