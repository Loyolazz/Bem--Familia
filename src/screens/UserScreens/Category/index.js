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
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import style from './style';
import Logo from '../../../assets/logo.png';
import DataCategory from './ListCategory';
import CardCategory from '../../../components/cardCategory';
import { getCategorias } from '../../../services/api';

export default function Category({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [listCategoria, setListCategoria] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await getCategoria();
    } finally {
      setRefreshing(false);
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={style.container}>
        <LinearGradient colors={['#005B96', '#093D73']} style={style.header}>
          <Image style={style.image} source={Logo} resizeMode="contain" />
        </LinearGradient>

        <View style={style.contentTitle}>
          <Text style={style.title}>Categorias</Text>
          <TouchableOpacity onPress={handleRefresh} disabled={refreshing}>
            <Icon name={'refresh'} size={30} color={'#19191B'} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <FlatList
            refreshing={refreshing}
            onRefresh={handleRefresh}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DataCategory}
            keyExtractor={(item) => item.name}
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
                  style={style.icon}
                >
                  <Icon name={item.icon} size={40} color={'#19191B'} />
                  <Text style={{ color: '#19191B', fontFamily: 'IstokWeb-Bold' }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          {listCategoria.map((item) => (
            <View key={item.nome}>
              <View style={style.categoryCardsBox}>
                <Text style={style.textCategory}>{item.nome}</Text>
                <View style={style.cardText}>
                  <Text
                    style={[
                      style.textG,
                      { textAlignVertical: 'center' },
                    ]}
                    numberOfLines={1}
                  >
                    {item.subcategoria}
                  </Text>
                </View>
              </View>
              
              <ScrollView horizontal={true} style={style.categoryCardsBoxVideo}>
                {item.videos.map((dataVideos) => (
                  <CardCategory
                    key={dataVideos.id}
                    onPress={() => {
                      navigation.navigate('Video', { data: dataVideos });
                    }}
                    posterPath={dataVideos.file}
                    text={dataVideos.titulo}
                    loc={dataVideos.autor}
                    avaliacao={dataVideos.avaliacaoAvg}
                    showRating={true}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

