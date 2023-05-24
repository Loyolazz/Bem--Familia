import React, { createRef, useState, useEffect, useContext } from 'react';
import { Text, Image, TouchableOpacity, SafeAreaView, View, Modal } from 'react-native';
import styles from './styles';
import Logo from '../../../assets/logo.png';
import Inputs from '../../../components/input';
import { AuthContext } from '../../../context';
import Toast from 'react-native-toast-message';
import toastConfig from '../Registration/toast/index';
import Line from '../../../components/Line';
import SplashLoading from '../../../components/loadingSplash';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [modalLoading, setModalLoading] = useState(false);
  const userInput = createRef();
  const passInput = createRef();

  const { login } = useContext(AuthContext);

  useEffect(() => userInput.current.resetError(), [user]);
  useEffect(() => passInput.current.resetError(), [pass]);

  function validate() {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Email Inválido',
        text2: 'Por favor, insira um email válido.',
        icon: 'account-outline',
      });
      userInput.current.focusOnError();
      return false;
    }
    if (!pass) {
      Toast.show({
        type: 'error',
        text1: 'Senha Inválida',
        text2: 'Por favor, insira uma senha válida.',
        icon: 'lock-outline',
      });
      passInput.current.focusOnError();
      return false;
    }
    return true;
  }

  return (
    <View style={styles.scroll}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text2}>Olá, seja Bem Vindo</Text>
          <Text style={styles.text1}>
            #Insira sua credencial para continuar
          </Text>
          <Inputs
            style={styles.input}
            ref={userInput}
            placeholder="Login"
            autoCapitalize="none"
            value={user}
            autoCorrect={false}
            onChangeText={text => setUser(text)}
          />
          <View style={{ padding: 10 }} />
          <Inputs
            style={styles.input}
            ref={passInput}
            autoCorrect={false}
            secureTextEntry
            value={pass}
            placeholder="Senha"
            onChangeText={text => setPass(text)}
          />
          <TouchableOpacity
            style={{ left: 110 }}
            onPress={() => navigation.navigate('PasswordForgot')}>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              if (validate()) {
                login(user, pass, setModalLoading);
              }
            }}>
            <Text style={styles.textButton2}>Conecte-se ao Bem Família</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', width: '80%', top: '10%' }}>
            <Image style={styles.image} source={Logo} resizeMode="contain" />

            <Text style={styles.text3}>
              Uma forma mais inteligente de aprender, através de vídeos
              educativos
            </Text>
            <Line diamondSize={10} length={240} color="#111111" />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: '25%',
            }}>
            <Text style={styles.text4}>Não tem uma conta? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.text5}> Inscreva-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <Toast config={toastConfig} />
      <SplashLoading
        modalVisible={modalLoading}
      />
    </View>
  );
}
