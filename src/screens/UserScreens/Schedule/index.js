import React from 'react';

import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
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
  {
    name: 'Fisioterapia',
    icon: 'crutch',
    page: 'ScreenConstructor',
  },
  {
    name: 'Odontologia',
    icon: 'tooth',
    page: 'ScreenConstructor',
  },
  {
    name: 'Nutrição',
    icon: 'utensils',
    page: 'ScreenConstructor',
  },
  {
    name: 'Veterinária',
    icon: 'paw',
    page: 'ScreenConstructor',
  },
  {
    name: 'Fonoaudiologia',
    icon: 'head-side-cough',
    page: 'ScreenConstructor',
  },
];

export default function Schedule({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <View style={{flexDirection: 'row'}}>
      <View style={{top: 30,left: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Iconi name={'arrow-back-outline'} size={40} color={'#19191B'} />
        </TouchableOpacity>
      </View>
        <Text style={style.text}>Selecione a Clínica ou Núcleo Desejado:</Text>
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
