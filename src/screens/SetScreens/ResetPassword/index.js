import React, { createRef, useState, useEffect, useContext } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View
} from 'react-native';
import styles from './styles';
import Logo from '../../../assets/logo.png';
import Inputs from '../../../components/input';
import Toast from 'react-native-toast-message';
import toastConfig from '../Registration/toast/index';
import Line from '../../../components/Line';
import CustomButton from '../../../components/customButton';
import { putPassword } from '../../../services/api';
import { AuthContext } from '../../../context';


export default function ResetPassword({ navigation }) {

  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');

  const { userToken } = useContext(AuthContext);

  const passInput = createRef();
  const passInput1 = createRef();

  const put = async () => {
    if (!pass) {
      alert('Digite a nova senha!');
      return;
    }
    if (!pass1) {
      alert('Confirme a senha!');
      return;
    }
    if (pass !== pass1) {
      alert('Senha incorreta!');
      return;
    }
    try {
        await putPassword(pass, userToken);
        alert('Senha alterada com sucesso!');
        navigation.goBack();
    } catch (error) {
        console.log(error);
        alert('Erro ao definir a senha!');
    }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text2}>Nova senha</Text>
        <Text style={styles.text1}>
          #Insira sua nova senha
        </Text>
        <Text style={styles.text4}>Insira sua nova senha</Text>
        <Text style={styles.text5}>
          #Insira sua nova senha para continuar
        </Text>

        <Inputs
          style={styles.input}
          ref={passInput}
          autoCorrect={false}
          secureTextEntry
          value={pass}
          placeholder="Digite a sua nova senha"
          onChangeText={text => setPass(text)}
        />
        <View style={{ padding: 10 }} />
        <Inputs
          style={styles.input}
          ref={passInput1}
          autoCorrect={false}
          secureTextEntry
          value={pass1}
          placeholder="Confirme a senha"
          onChangeText={text => setPass1(text)}
        />
        <View style={{ padding: 30 }} />
        <CustomButton
          text="Confirmar"
          backgroundColor="#093D73"
          textColor="#FFFFFF"
          onPress={put}
        />
        <View style={{ alignItems: 'center', width: '80%', top: '10%' }}>
          <Image style={styles.image} source={Logo} resizeMode="contain" />

          <Text style={styles.text3}>
            Uma forma mais inteligente de aprender, através de vídeos
            educativos
          </Text>
          <Line diamondSize={10} length={240} color="#111111" />
        </View>
      </View>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}