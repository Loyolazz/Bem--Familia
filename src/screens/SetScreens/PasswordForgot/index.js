import React from 'react';

import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/logo.png';
import Line from '../../../components/Line';
export default function PasswordForgot({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <View style={{top: '30%', alignItems: 'center'}}>
        <Text style={styles.text2}>Esqueceu a senha?</Text>
        <Text style={styles.text1}>#Insira uma nova senha para continuar</Text>
      
          <Text style={styles.text}>
            Digite seu endereço de email e enviaremos um link para redefinir sua senha
          </Text>
          <View style={{paddingTop: 50}}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#AFB1B6"
              style={styles.input}
            />
           
          </View>
          <View style={{paddingTop: 25, paddingBottom: 20}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ResetPassword');
              }}>
              <Text style={styles.textButton}>Enviar Email</Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.image} source={Logo} resizeMode="contain" />
          
          <Text style={styles.text3}>Uma forma mais inteligente de aprender, através de vídeos educativos</Text>
          <Line diamondSize={10} length={240}  color="#111111"  />
        </View>
      </View>
    </SafeAreaView>
  );
}
