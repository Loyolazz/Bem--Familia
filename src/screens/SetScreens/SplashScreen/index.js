import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  const finishSplash = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Presentation' }],
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5B9EA6', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={finishSplash} style={{ padding: 16, backgroundColor: '#FFFFFF', borderRadius: 8 }}>
        <Text style={{ color: '#5B9EA6', fontSize: 18 }}>Finish Splash</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
}
