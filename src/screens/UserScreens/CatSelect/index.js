import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './styles';
import CardVideo from '../../../components/cardVideo';

export default function CatSelect({route, navigation}) {
  const {dataVideos} = route.params;
  const [listVideos, setListVideos] = useState([]);

  useEffect(() => {
    const data = dataVideos
      .filter(item => item.subcategoria === route.params.category)
      .flatMap(item => item.videos);

    setListVideos(data);
  }, [dataVideos, route.params.category]);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.backContainer}>
       
          <TouchableOpacity
            style={style.iconBorder}
            onPress={() => navigation.goBack()}>
            <Icon name={'arrow-back-outline'} size={30} color={'#ffffff'} />
          </TouchableOpacity>
       
          <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 25,
              textAlign: 'center',
              fontFamily: 'IstokWeb-Bold',
             
            }}>
            {route.params.category}
          </Text>
          </View>
      </View>
      <View style={{paddingTop: 20}} />
      <View style={style.listContainer}>
        <FlatList
          data={listVideos}
          keyExtractor={item => `${item.id}`}
          onEndReachedThreshold={0.2}
          renderItem={({item}) => (
            <CardVideo
              onPress={() => navigation.push('Video', {data: item})}
              posterPath={item.file}
              text={item.titulo}
              loc={item.autor}
              avaliacao={item.avaliacaoAvg}
              isSearchCard={true}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
