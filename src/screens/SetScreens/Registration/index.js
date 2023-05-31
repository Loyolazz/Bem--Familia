import React, {useContext, useState, useRef} from 'react';
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast, {ErrorToast} from 'react-native-toast-message';
import {AuthContext} from '../../../context';
import Inputs from '../../../components/input';
import Logo from '../../../assets/logo.png';
import style from './styles';
import Line from '../../../components/Line';
import toastConfig from './toast/index';
import SplashLoading from '../../../components/loadingSplash'

export default function Registration({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [modalLoading, setModalLoading] = useState(false);
  const nomeInput = useRef(null);
  const senhaInput = useRef(null);
  const loginInput = useRef(null);
  const emailInput = useRef(null);

  const {register} = useContext(AuthContext);

  function validateForm() {
    if (!nome) {
      nomeInput.current.focusOnError();
      return false;
    }
    if (!email) {
      emailInput.current.focusOnError();
      return false;
    }
    if (!login) {
      loginInput.current.focusOnError();
      return false;
    }
    if (!senha) {
      senhaInput.current.focusOnError();
      return false;
    }
    return true;
  }

  return (
    <ScrollView style={style.scroll}>
      <SafeAreaView style={style.container}>
        <View style={style.content}>
          <View style={{padding: 20}} />
          <Text style={style.text2}>Criar uma conta</Text>
          <Text style={style.text3}>#Inscreva-se para começar</Text>
          <Inputs
            style={style.input}
            ref={nomeInput}
            placeholder="Nome completo"
            autoCapitalize="none"
            autoCorrect={false}
            value={nome}
            onChangeText={text => setNome(text)}
          />
          <View style={{padding: 10}} />
          <Inputs
            style={style.input}
            ref={emailInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View style={{padding: 10}} />
          <Inputs
            style={style.input}
            ref={loginInput}
            placeholder="Login"
            autoCapitalize="none"
            autoCorrect={false}
            value={login}
            onChangeText={text => setLogin(text)}
          />
          <View style={{padding: 10}} />
          <Inputs
            style={style.input}
            ref={senhaInput}
            placeholder="Senha"
            value={senha}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={text => setSenha(text)}
          />
          <View style={{paddingTop: 25, paddingBottom: 20}}>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                if (validateForm()) {
                  register(nome, email, login, senha, setModalLoading, navigation);
                }
              }}>
              <Text style={style.textButton}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <Image style={style.image} source={Logo} resizeMode="contain" />
          <Text style={style.text4}>
            Aprenda no seu próprio ritmo com nossos vídeos educativos
          </Text>
          <Line diamondSize={10} length={240} color="#111111" />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: '8%',
            }}>
            <Text style={style.text6}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={style.text5}> Conecte-se</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Toast type="error" config={toastConfig} />
        <SplashLoading
        modalVisible={modalLoading}        
        />
      </SafeAreaView>
    </ScrollView>
  );
}
