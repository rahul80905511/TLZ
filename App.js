import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import LoginScreen from './src/screens/onboarding/LoginScreen';
import ForgotPasswordScreen from './src/screens/onboarding/ForgotPasswordScreen';
import Footer from './src/components/Footer';
import ApplicationJourney from './src/screens/Dashboard/ApplicationJourney';
import ImagePicker from './src/Testing/ImagePicker';
import { Button, Text, View } from 'react-native';
import { verifyPassport } from './src/utils/apiCall';
import ImageUpload from './src/Testing/ImageUpload';
import PassportVerification from './src/Testing/PassportVerification';
import ExtractedPassportInfo from './src/components/ExtractedPassportInfo';
import PhotoVerifyScreen from './src/screens/KYC/PhotoVerifyScreen';
import ESignScreen from './src/screens/KYC/ESignScreen';
import DownloadScreen from './src/screens/KYC/KYCSuccessScreen';
import KYCSuccessScreen from './src/screens/KYC/KYCSuccessScreen';
import PersonalDetails from './src/screens/KYC/PersonalDetails'
import ContactInformation from './src/screens/KYC/ContactInformation';
import UaeAddrInfo from './src/screens/KYC/UaeAddrInfo';
import HomeAddrInfo from './src/screens/KYC/HomeAddrInfo';
import MaritalInfo from './src/screens/KYC/MaritalInfo';
import FamilyBackground from './src/screens/KYC/FamilyBackground';
import EmiratesIdUpload from './src/screens/KYC/EmiratesIdUpload';
import { PEPCHECK } from './src/utils/storage';
import PEPCheck from './src/screens/KYC/PEPCheck';
import MainDashBoard from './src/screens/Dashboard/MainDashBoard';
import DocumentVault from './src/screens/Dashboard/DocumentVault';

const Stack = createStackNavigator();
const App = () => {
  const [idImage, setIdImage] = useState(null);
  const [liveImage1, setLiveImage1] = useState(null);
  const [liveImage2, setLiveImage2] = useState(null);

  // const verifyImages = () => {
  //   verifyPassport(idImage,liveImage1,liveImage2).then((response)=>{
  //     console.log('====================================');
  //     console.log(response);
  //     console.log('====================================');
  //   }).catch((e)=>{
  //     console.log('====================================');
  //     console.error(e.message);
  //     console.log('====================================');
  //   });
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={MainDashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="docVault"
        component={DocumentVault}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="appJourney"
          component={ApplicationJourney}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="footer"
          component={Footer}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="imageUpload"
        component={ImageUpload}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="passportVerification"
      component={PassportVerification}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="photoVerifyScreen"
      component={PhotoVerifyScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="eSignScreen"
      component={ESignScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
name="pepCheck"
component={PEPCheck}
options={{headerShown: false}}
/>
   
    <Stack.Screen
    name="KYCSuccessScreen"
    component={KYCSuccessScreen}
    options={{headerShown: false}}
  />
    <Stack.Screen
    name="passportData"
    component={ExtractedPassportInfo}
    options={{headerShown: false}}
  />
  <Stack.Screen
      name="personalDetails"
      component={PersonalDetails}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="contactInformation"
      component={ContactInformation}
      options={{headerShown: false}}
    />
    <Stack.Screen
    name="uaeaddrInfo"
    component={UaeAddrInfo}
    options={{headerShown: false}}
  />
  <Stack.Screen
    name="homeAddrInfo"
    component={HomeAddrInfo}
    options={{headerShown: false}}
  />
  <Stack.Screen
    name="martialInfo"
    component={MaritalInfo}
    options={{headerShown: false}}
  />
  <Stack.Screen
  name="familyBackground"
  component={FamilyBackground}
  options={{headerShown: false}}
/>
<Stack.Screen
name="emirateidUpload"
component={EmiratesIdUpload}
options={{headerShown: false}}
/>
 
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};

export default App;

 // <ImagePicker imagePickerCallback={setIdImage} captureimage={setIdImage} />
      // <ImagePicker
      //   imagePickerCallback={setLiveImage1}
      //   captureimage={setLiveImage1}
      // />
      // <ImagePicker
      //   imagePickerCallback={setLiveImage2}
      //   captureimage={setLiveImage2}
      // />
      // <View>
      //   <Button title='Verify' onPress={verifyImages}/>
      // </View>
