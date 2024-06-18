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
  ImageBackground,
} from 'react-native';
import bell from '../assests/bell.png';
import Stepper from '../utils/Stepper';
import ImagePickerButton from '../components/ImagePickerButton';
import axios from 'axios';
import {storeData} from '../utils/storage';
import ProgressBar from '../components/ProgressBar';
import vectorimg from '../assests/Vector.png';

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
    // TODO
    await storeData('passportFront', selectedImage.uri);
    await storeData('passportBack', selectedImage2.uri);
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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={vectorimg} style={styles.bellImage} />
          </TouchableOpacity>

          <Text style={{fontSize: 20, color: '#3D4C5E'}}>KYC & Compliance</Text>
          <Image source={bell} style={styles.bellImage} />
        </View>

        <View style={styles.stepperContainer}>
          <Stepper currentPosition={3} />
        </View>
        <ProgressBar
          progress={0}
          label="Progress"
          height={20}
          color="#004A70"
          unfilledColor="#E0E0E0"
        />

        <View style={styles.shareHolderList}>
          <Text style={{marginLeft: '9%', marginTop: '3%', fontWeight: '500',color:"#546881"}}>
            Shareholding Name
          </Text>
          <View style={styles.shareHolderNames}>
            <Text
              style={{
                textAlign: 'left',
                marginTop: '0%',
                marginLeft: '2%',
                padding: '1%',
                color:'#a3adbb'
              }}>
              ShareHolder Name
            </Text>
          </View>
        </View>
        <View style={styles.passportContainer}>
          <Text style={{marginBottom: 15, fontWeight: '500', color:'#546881'}}>
            Passport Front
          </Text>
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
          <Text style={{marginBottom: 15, fontWeight: '500',color:'#546881'}}>
            Passport Back
          </Text>
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
            style={styles.buttonContainerbtn}
            onPress={dataExtractionFromPassport}>
            <ImageBackground
              source={require('../assests/rectangleButton.png')}
              style={styles.imageBackground}>
              <Text style={styles.buttonTextfoot}>
                Extract Details From Passport
              </Text>
            </ImageBackground>
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
  buttonContainerbtn: {
    width: width * 0.79,
    height: height * 0.06,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 5,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextfoot: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    top: '5%',
    width: '100%',
    alignItems: 'center',
    marginBottom:'4%'
  },
  bellImage: {
    // marginLeft: '8%',
  },
  stepperContainer: {
    marginTop: '3%',
  },
  shareHolderList: {
    marginTop: '3%',
  },
  shareHolderNames: {
    width: '83%',
    // height:"20%",
    borderColor: '#eef0f1',
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
