import React, { useState } from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import attach from '../assests/attach.png';

const ImagePicker = ({ imagePickerCallback, captureImage }) => {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image URI
  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Choose from Gallery', onPress: pickImageFromGallery },
        { text: 'Capture from Camera', onPress: captureImageFromCamera },
      ],
      { cancelable: true },
    );
  };

  const pickImageFromGallery = () => {
    let options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const imageObj = response.assets[0];
        setSelectedImage(imageObj); // Set selected image URI
        imagePickerCallback(imageObj);
      }
    });
  };

  const captureImageFromCamera = () => {
    let options = {
      mediaType: 'photo',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const imageObj = response.assets[0];
        setSelectedImage(imageObj); // Set selected image URI
        captureImage(imageObj);
       
      }
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.borderImage}
        onPress={showImagePickerOptions}
      >
        <Image source={attach} style={{ width: 40, height: 40 }} />
        <View style={styles.textview}>
          <Text style={styles.imagetext}>
            {selectedImage ? selectedImage.uri.split('/').pop() : 'image.png'}
            {/* Displaying image name or a default name */}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  borderImage: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#52ABC7',
    borderWidth: 2,
    borderRadius: 5,
    width: '90%',
  },
  imagetext: {
    color: '#006AFF',
    
  },
  textview:{
width:"80%"
  }
});

export default ImagePicker;
