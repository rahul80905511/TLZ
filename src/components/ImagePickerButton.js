import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import attach from '../assests/attach.png';

const { height, width } = Dimensions.get('window');

const ImagePicker = ({ onImageSelect }) => {
  const [imageName, setImageName] = useState('image.png'); // State to hold the image name

  const pickImage = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: false, // You can set this to true if you need base64 data
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0];
        setImageName(uri.fileName || 'image.png'); // Update state with selected image name
        onImageSelect(uri);
      }
    });
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Choose from Gallery', onPress: pickImage },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.borderImage} onPress={showImagePickerOptions}>
        <Image
          source={attach}
          style={{ width: 40, height: 40 }}
        />
       <View>
       <Text style={styles.imagetext}>{imageName}</Text>
       </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  attachContainer: {
    width: "89%",
    height: "37%",
    borderColor: '#52ABC7',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: '0.5%',
  },
  borderImage: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: '#52ABC7',
    borderWidth: 2,
    borderRadius: 5,
    width: "90%"
  },
  imagetext: {
color: "#006AFF"
  }
});

export default ImagePicker;
