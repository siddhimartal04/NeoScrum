import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {globalStyles} from '../styles/globalStyles';

/**
 * @author Siddhi Martal
 * @description this screen show loader to the screen.
 * @return jsx.
 */

function LoadingScreen() {
  return (
    <View
      style={{
       
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LottieView
        source={require('../assets/bed.jpeg')}
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        loop
      />
    </View>
  );
}

export default LoadingScreen;