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
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/logo.png';


const DATA = [
  {
    name: 'Videos',
    icon: 'videocam-outline',
    page: 'Category'
  },
/*   {
    name: 'Atendimento On-Line',
    icon: 'people-outline',
    page: 'Calls'
  }, */
/*   {
    name: 'Agendamento',
    icon: 'calendar-outline',
    page: 'Map'
  }, */
/*   {
    name: 'Orientações',
    icon: 'clipboard-outline',
    page: 'ScreenConstructor'
  }, */
/*   {
    name: 'Entretenimento',
    icon: 'play-outline',
    page: 'ScreenConstructor'
  }, */
  {
    name: 'FAQ',
    icon: 'chatbubbles-outline',
    page: 'Faq'
  },
];

export default function Services({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <Image style={style.image} source={Logo} resizeMode= "contain"/>

        <Text style={style.text}>Selecione o serviço desejado:</Text>
        <View style={{paddingTop: 50}}/>
        <FlatList
          data={DATA}
          keyExtractor={item => item.name}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  padding: 20,
                  alignItems: 'center'
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
    </SafeAreaView>
  );
}
