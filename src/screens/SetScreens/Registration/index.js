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
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [modalLoading, setModalLoading] = useState(false);
  const userInput = useRef(null);
  const passInput = useRef(null);
  const loginInput = useRef(null);
  const emailInput = useRef(null);

  const {register} = useContext(AuthContext);

  function validateForm() {
    if (!user) {
      userInput.current.focusOnError();
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
    if (!pass) {
      passInput.current.focusOnError();
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
            ref={userInput}
            placeholder="Nome completo"
            autoCapitalize="none"
            autoCorrect={false}
            value={user}
            onChangeText={text => setUser(text)}
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
            ref={passInput}
            placeholder="Senha"
            value={pass}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={text => setPass(text)}
          />
          <View style={{paddingTop: 25, paddingBottom: 20}}>
            <TouchableOpacity
              style={style.button}
              onPress={() => {
                if (validateForm()) {
                  register(user, email, login, pass, setModalLoading);
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
