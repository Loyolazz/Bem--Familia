import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import style from './styles';
import IMG1 from '../../../assets/img1.png';

const Presentation = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate('InitialScreen');
  };

  return (
    <SafeAreaView style={style.container}>
      <Image style={style.image} source={IMG1} resizeMode="contain" />

      <View>
        <TouchableOpacity onPress={handleStart} style={style.button}>
          <Text style={style.textButton}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Presentation;