import React from 'react';

import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import style from './style';
import Logo from '../../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    name: 'Psicologia',
    icon: 'head-side-virus',
    page: 'ScreenConstructor',
  },
  {
    name: 'Direito',
    icon: 'balance-scale',
    page: 'ScreenConstructor',
  },
];

export default function Calls({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <View style={{paddingRight: 300, bottom: 100}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Iconi name={'arrow-back-outline'} size={40} color={'#19191B'} />
        </TouchableOpacity>
      </View>
      <Image style={style.image} source={Logo} resizeMode="contain" />
      <View>
        <Text style={style.text}>Selecione o Serviço desejado:</Text>
      </View>
      <View style={style.content}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.name}
          numColumns={2}
          renderItem={({item}) => {
            const SVG = `${item.icon}`;
            const page = `${item.page}`;
            return (
              <View
                style={{
                  flex: 1,
                  padding: 20,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.page);
                  }}
                  style={style.card}>
                  <Icon name={item.icon} size={30} color={'#19191B'} />
                  <Text style={style.textButton}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
