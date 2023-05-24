import React, { useState, useEffect } from 'react';

import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import Logo from '../../../assets/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { getCategorias } from '../../../services/api';
import DataCategory from './ListCategory';
import CardCategory from '../../../components/cardCategory';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function Category({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [listCategoria, setListCategoria] = useState([]);

  const getCategoria = async () => {
    try {
      const response = await getCategorias();
      setListCategoria(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  };

  useEffect(() => {
    getCategoria();
  }, []);

  if (isLoading) {
    return (
      <View style={[style.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#ff930f" />
      </View>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <LinearGradient colors={['#dc462d', '#eb7c2d']} style={style.header}>
        <Image style={style.image} source={Logo} resizeMode="contain" />
      </LinearGradient>

      <View style={style.contentTitle}>
        <Text style={style.title}>Categorias</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DataCategory}
        keyExtractor={item => item.name}
        numColumns={1}
        renderItem={({ item }) => {
          const page = `${item.page}`;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CatSelect', {
                  category: item.name,
                  dataVideos: listCategoria,
                })
              }
              style={style.icon}>
              <Icon name={item.icon} size={40} color={'#19191B'} />
              <Text style={{ color: '#19191B', fontFamily: 'IstokWeb-Bold' }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={{ paddingTop: 20 }} />
      <FlatList
        data={listCategoria}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return (

            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.textCategory}>{item.nome}</Text>
                <View style={style.cardText}>
                  <Text style={[style.textG, { textAlignVertical: 'center' }]} numberOfLines={1}>{item.subcategoria}</Text>
                </View>
              </View>
              <ScrollView horizontal={true}>
                {item.videos.map(dataVideos => (
                  <CardCategory
                    key={dataVideos.id}
                    onPress={() => {
                      navigation.navigate('Video', { data: dataVideos });
                    }}
                    posterPath={dataVideos.file}
                    text={dataVideos.titulo}
                    loc={dataVideos.autor}
                  />
                ))}
              </ScrollView>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
