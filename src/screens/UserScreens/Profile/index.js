import React, { useContext, useState, useEffect } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import CardCategory from '../../../components/cardCategory';
import { AuthContext } from '../../../context';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Profile({ navigation }) {
  const { logout, userInfo, userToken } = useContext(AuthContext);
  const [listFavorite, setListFavorite] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getFavorite = async () => {
    try {
      const response = await axios.get('http://144.22.182.223/favoritos', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      });
      setListFavorite(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavorite();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await getFavorite();
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleViewAllFavorites = () => {
    navigation.navigate('Favorite');
  };

  const handlePressCardCategory = (item) => {
    navigation.navigate('Video', { data: item });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' backgroundColor={"#005B96"}/>
      <SafeAreaView style={style.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          
          <LinearGradient colors={['#005B96', '#093D73']} style={style.header}>
            <TouchableOpacity activeOpacity={1} style={style.contentlogout}>
              <Text style={style.logoutText} onPress={handleLogout}>
                Sair da conta
              </Text>
              <Icon name={'log-out-outline'} size={25} color={'#FFFFFF'} />
            </TouchableOpacity>
            <View style={style.contentProfile}>
              <Text style={style.greetingText}>Olá, {userInfo.usuario.nome}</Text>
              <Text style={style.greetingTextEmail}>
                E-mail: {userInfo.usuario.email}
              </Text>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ResetPassword')}
                  style={style.button}
                >
                  <Text style={style.resetPassword}>Alterar senha</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.contentCircle}>
              <View style={style.elipse}>
                <Text style={style.greetingN}>{userInfo.usuario.nome[0]}</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={style.favoriteContainer}>
            <Text style={style.favoriteTitle}>Vídeos salvos: </Text>
            <TouchableOpacity
              onPress={handleRefresh}
              disabled={refreshing}
              style={{ marginLeft: 120 }}
            >
              <Icon name={'refresh'} size={30} color={'#19191B'} />
            </TouchableOpacity>
          </View>
          {listFavorite.length === 0 ? (
            <View style={style.emptyFavoriteContainer}>
              <Text style={style.emptyFavoriteText}>
                Você não tem nenhum vídeo salvo.
              </Text>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <FlatList
                refreshing={refreshing}
                onRefresh={handleRefresh}
                data={listFavorite}
                numColumns={2}
                scrollEnabled={false}
                keyExtractor={(item) => item.id.toString()}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => (
                  <CardCategory
                    onPress={() => handlePressCardCategory(item)}
                    posterPath={item.file}
                    text={item.titulo}
                    loc={item.autor}
                    avaliacao={item.avaliacaoAvg}
                  />
                )}
              />
            </View>
          )}
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              marginLeft: 20,
              marginBottom: 25,
              marginTop: 10,
              fontFamily: 'IstokWeb-Bold',
            }}
          >
            Assistidos
          </Text>
          {/*         <FlatList
          data={watchedVideos}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <CardCategory
              onPress={() => handlePressCardCategory(item)}
              posterPath={item.file}
              text={item.titulo}
              loc={item.autor}
            />
          )}
        /> */}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
