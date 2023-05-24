import React, { useCallback } from 'react';
import { View } from 'react-native';
import Rive from 'rive-react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  const finishSplash = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Presentation' }],
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: '#5B9EA6' }}>
      <Rive
        resourceName="splashspeed"
        style={{ flex: 1 }}
        onStop={finishSplash}
      />
      <LottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
        hardwareAccelerationAndroid={false}
        speed={0.19}
        onAnimationFinish={finishSplash}
        style={{top: 45}}
      />
    </View>
  );
}