import React, { useMemo, useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView, BackHandler } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import CardVideo from '../../../components/cardVideo';
import { getVideos } from '../../../services/api';
import Modal from '../../../components/modalRating';
import FavoriteButton from '../../../components/favorite';
import WebView from 'react-native-webview';
import Orientation from 'react-native-orientation-locker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

const PlayerVideo = ({ navigation, route }) => {
  const [postData, setPostData] = useState(route.params.data);
  const [listVideo, setListVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const webViewRef = useRef(null);
  const injected = `["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach( eventType => document.addEventListener(eventType, function(e){ window.ReactNativeWebView.postMessage(e) }, false) ); true;`;

  const shuffle = useCallback((array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }, []);

  const sortedVideos = useMemo(() => [...listVideo].sort((a, b) => b.avaliacaoAvg - a.avaliacaoAvg).slice(0, 5), [listVideo]);

  const recomendVideos = useMemo(() => shuffle([...sortedVideos]), [sortedVideos]);

  const getVideo = useCallback(async () => {
    try {
      const response = await getVideos();
      setListVideo(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getVideo();
  }, []);

  function handleBackButtonClick() {
    navigation.navigate('TabBot');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  const Loading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#FFA500" />
      <Text style={styles.loadingText}>Carregando vídeo...</Text>
    </View>
  );

  const renderFooter = () => {
    return (
      <View style={{ height: 400 }}></View>
    );
  };

  return (
    <SafeAreaView style={styles.mainPlayerView}>
      <GestureHandlerRootView>
        <View style={styles.viewVideo}>
          {isLoading && <Loading />}
          <WebView
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            source={{ uri: postData.link }}
            style={{ opacity: 0.99 }}
            domStorageEnabled={false}
            ref={webViewRef}
            javaScriptEnabled={true}
            injectedJavaScript={injected}
            renderLoading={() => <Loading />}
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
            allowUniversalAccessFromFileURLs={true}
            useWebKit={true}
            cacheEnabled={true}
            allowsProtectedMedia={true}
            allowsFullscreenVideo={true}
            onMessage={(event) => {fullscreen ? Orientation.lockToPortrait() : Orientation.lockToLandscapeLeft(); setFullscreen(!fullscreen)}}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10 }}>
          <Text style={styles.postTitle}>
            {postData.titulo}
          </Text>
          <FavoriteButton id={postData.id} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.postName}>{postData.autor}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.contentAvaliar}>
            <Modal id={postData.id} />
            <View style={{ flexDirection: 'row', width: 60 }}>
              <Icon name={'star'} size={15} color={'#FFA500'} />
              <Text style={styles.postTypeTwo}>
                {postData.avaliacaoAvg}
              </Text>
            </View>
          </View>
        </View>
        <Text style={{ color: '#000000', fontSize: 20, marginLeft: 20, marginBottom: 25, marginTop: 10, fontFamily: 'IstokWeb-Bold' }}>
          Recomendados
        </Text>
        <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={recomendVideos}
            keyExtractor={(item, index) => `${index}`}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            windowSize={5}
            renderItem={({ item }) => {
              return (
                <CardVideo
                  onPress={() => {
                    navigation.push('Video', { data: item });
                  }}
                  posterPath={item.file}
                  text={item.titulo}
                  loc={item.autor}
                  avaliacao={item.avaliacaoAvg}
                  isSearchCard={true}
                />
              )
            }}
          />
        </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default PlayerVideo;