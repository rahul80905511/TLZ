import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import bell from '../../assests/bell.png'; // Make sure this path is correct
import Stepper from '../../utils/Stepper';
import Footer from '../../components/Footer';
import ImagePicker from '../../components/ImagePickerButton';
import {EMIRATESDATA, storeData} from '../../utils/storage';
import {Dimensions} from 'react-native';
import vectorimg from '../../assests/Vector.png';
import ProgressBar from '../../components/ProgressBar';
const {width, height} = Dimensions.get('window');

const EmiratesIdUpload = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [emiratesExpiryDate, setemiratesExpiryDate] = useState('');
  const [emiratesIssueDate, setemiratesIssueDate] = useState('');
  const [emiratesId, setemiratesId] = useState('');

  const handleImageSelect = imageUri => {
    setSelectedImage(imageUri);
  };

  const storeEmiratesData = () => {
    storeData(EMIRATESDATA, {emiratesId, emiratesIssueDate, emiratesExpiryDate})
      .then(() => {
        navigation.navigate('photoVerifyScreen');
      })
      .catch(error => {
        Alert.alert('Error', 'Something went wrong');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={vectorimg} style={styles.bellImage} />
          </TouchableOpacity>

          <Text style={{fontSize: 20, color: '#3D4C5E'}}>KYC & Compliance</Text>
          <Image source={bell} style={styles.bellImage} />
        </View>
        <View style={{marginTop: '10%'}}>
          <Stepper currentPosition={3} />
        </View>
        <View style={{width: '100%'}}>
          <ProgressBar
            progress={0.72}
            label="Progress"
            height={20}
            color="#004A70"
            unfilledColor="#E0E0E0"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Emirates ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={emiratesId}
            onChangeText={setemiratesId}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Issue Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={emiratesIssueDate}
            onChangeText={setemiratesIssueDate}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Expiry Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here"
            placeholderTextColor="#909DAD"
            value={emiratesExpiryDate}
            onChangeText={setemiratesExpiryDate}
          />
        </View>

        <View style={{marginLeft: '11%', marginTop: '5%'}}>
          <Text style={{fontSize: 18, fontWeight: '500', color: '#1D242D'}}>
            Upload Emirates Id
          </Text>
        </View>

        <View style={styles.uploadContainer}>
          <Text
            style={{
              fontWeight: '500',
              color: '#546881',
              fontSize: 16,
              marginBottom: '3%',
            }}>
            Emirates ID
          </Text>
          <ImagePicker onImageSelect={handleImageSelect} />
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5%',
          }}>
          {selectedImage && (
            <Image
              source={{uri: selectedImage.uri}}
              style={{width: 200, height: 200}}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonContainerbtn}
            onPress={storeEmiratesData}>
            <ImageBackground
              source={require('../../assests/rectangleButton.png')}
              style={styles.imageBackground}>
              <Text style={styles.buttonTextfoot}>Next</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{position: 'relative', bottom: 0, width: '100%'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerbtn: {
    width: width * 0.79,
    height: height * 0.06,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: '20%',
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
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    top: '4%',
    width: '100%',
    alignItems: 'center',
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
  uploadContainer: {
    marginLeft: '8%',
    marginTop: '5%',
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
    backgroundColor: '#eef0f1',
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
    borderRadius: 8,
    marginTop: '4%',
    width: '90%',
  },
});

export default EmiratesIdUpload;
