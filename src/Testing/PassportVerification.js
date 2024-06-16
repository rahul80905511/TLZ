import React, {useState} from 'react';
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
} from 'react-native';
import bell from '../assests/bell.png';
import Stepper from '../utils/Stepper';
import ImagePickerButton from '../components/ImagePickerButton';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const PassportVerification = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [passportData, setPassportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = imageUri => {
    setSelectedImage(imageUri);
  };

  const handleImage2Select = imageUri => {
    setSelectedImage2(imageUri);
  };

  const dataExtractionFromPassport = async () => {
    setIsLoading(true); // Show loader

    const formData = new FormData();
    formData.append('idPhoto', {
      uri: selectedImage.uri,
      name: selectedImage.fileName,
      type: selectedImage.type,
    });

    try {
      const response = await axios.post(
        'https://tjz-backend-kyc.onrender.com/api/v1/extractPassportInfo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setPassportData(response.data);
      setIsLoading(false); // Hide loader after data is fetched

      // Navigate to another page after data is loaded
      navigation.navigate('passportData', {passportData: response.data});
    } catch (error) {
      console.error('Error extracting passport info:', error);
      setIsLoading(false); // Hide loader in case of error
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 16, fontWeight: '400'}}>
            KYC & Compliance
          </Text>
          <Image source={bell} style={{position: 'relative', left: 70}} />
        </View>
        <View style={styles.stepperContainer}>
          <Stepper currentPosition={0} />
        </View>
        <View style={styles.shareHolderList}>
          <Text style={{marginLeft: '9%', marginTop: '3%',fontWeight:"bold"}}>
            Shareholding Name
          </Text>
          <View style={styles.shareHolderNames}>
            <Text
              style={{
                textAlign: 'left',
                marginTop: '0%',
                marginLeft: '2%',
                padding: '1%',
              }}>
              ShareHolder Name
            </Text>
          </View>
        </View>
        <View style={styles.passportContainer}>
          <Text style={{marginBottom: 15,fontWeight:"bold"}}>Passport Front</Text>
          <ImagePickerButton onImageSelect={handleImageSelect} />
          <View style={{marginTop: '2%'}}>
            {selectedImage && (
              <Image
                source={{uri: selectedImage.uri}}
                style={{
                  width: width * 0.83,
                  height: 178,
                  position: 'relative',
                }}
              />
            )}
          </View>
        </View>
        <View style={styles.passportContainer}>
          <Text style={{marginBottom: 15,fontWeight:"bold"}}>Passport Back</Text>
          <ImagePickerButton onImageSelect={handleImage2Select} />
          <View style={{marginTop: '3%'}}>
            {selectedImage2 && (
              <Image
                source={{uri: selectedImage2.uri}}
                style={{
                  width: width * 0.83,
                  height: 178,
                  position: 'relative',
                }}
              />
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={dataExtractionFromPassport}>
            <Text style={styles.buttonText}>
              Extract Details From Passport
            </Text>
          </TouchableOpacity>
        </View>

        {/* Loader */}
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
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
  shareHolderList: {
    marginTop: '3%',
  },
  shareHolderNames: {
    width: '83%',
    borderColor: '#52ABC7',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: '8%',
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
});

export default PassportVerification;
