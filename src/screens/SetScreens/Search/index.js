import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { getSearch } from '../../../services/api';
import { SearchBar } from '@rneui/themed';
import CardVideo from '../../../components/cardVideo';
import styles from './styles';

const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataSearch = async () => {
      const response = await getSearch();
      setFilteredData(response.data);
      setMasterData(response.data);
      setIsLoading(false);
    };
    dataSearch();
    return () => {
      setSearch('');
    };
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleClearSearch = () => {
    setSearch('');
    setFilteredData(masterData);
  };

  useEffect(() => {
    const formattedText = search.toUpperCase();
    const newData = masterData.filter((item) =>
      item.titulo.toUpperCase().includes(formattedText)
    );
    setFilteredData(newData);
  }, [search]);

  const renderItem = ({ item }) => (
    <CardVideo
      onPress={() => {
        navigation.navigate('Video', { data: item });
      }}
      posterPath={item.file}
      text={item.titulo}
      loc={item.autor}
      isSearchCard={true}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <ActivityIndicator size="large" color="#ff930f" />
        </View>
      ) : (
        <>
          <View style={styles.searchBarContainer}>
            <SearchBar
              placeholder="Pesquise Aqui..."
              onChangeText={handleSearch}
              onClear={handleClearSearch}
              value={search}
              searchIcon={styles.searchBarInputContainer.searchIcon}
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarInputContainer}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Resultados da Pesquisa</Text>
          </View>

          <View style={styles.flatListContainer}>
            {filteredData.length ? (
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContentContainer}
                ListFooterComponent={<View style={styles.flatListFooter} />}
              />
            ) : (
              <Text style={styles.emptyListText}>Nenhum resultado encontrado</Text>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Search;