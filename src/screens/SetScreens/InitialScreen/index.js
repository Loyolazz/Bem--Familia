import React from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import Line from '../../../components/Line';
import style from './styles';
import Logo from '../../../assets/logo.png';
import LinearGradient from 'react-native-linear-gradient';

const InitialScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegistration = () => {
    navigation.navigate('Registration');
  };

  return (
    <SafeAreaView style={style.container} >
      <LinearGradient colors={['#005B96', '#093D73']} style={style.header}>
        <Image style={style.image} source={Logo} resizeMode="contain" />
      </LinearGradient>
      <View style={{ top: '3%' }}>
        <View style={{ right: 150 }}>
          <Text style={style.text}>#Sua busca começa aqui</Text>
          <Line diamondSize={10} length={240} color="#AFB1B6" />
        </View>
      </View>
      <View style={{ bottom: 70 }}>
        <TouchableOpacity onPress={handleLogin} style={style.button}>
          <Text style={style.textButton}>Conecte-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegistration} style={style.button2}>
          <Text style={style.textButton2}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          bottom: 10,
        }}
      >
        <Text style={style.text2}>Aqui você cresce!</Text>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
