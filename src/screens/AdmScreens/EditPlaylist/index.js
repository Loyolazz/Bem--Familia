import React, { useState, createRef, useContext, useEffect } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../../../components/Line';
import Inputs from '../../../components/input';
import CategoryList from '../../../components/categoryItens';
import DataCategory from '../../UserScreens/Category/ListCategory'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../components/customButton';
import EditCard from '../../../components/editCard';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { putCategorys } from '../../../services/api';
import { AuthContext } from '../../../context';


export default function EditPlaylist({ navigation }) {
  const route = useRoute();
  const { userToken } = useContext(AuthContext);
  const data = route.params?.data;

  const [category, setCategory] = useState(data.subcategoria);
  const [name, setName] = useState(data.nome);
  const [refreshing, setRefreshing] = useState(false);
  const [listCategory, setListCategory] = useState([]);


  const putCategory = async () => {
    if (!name) {
      alert('Digite um titulo');
      return;
    }
    if (!category) {
      alert('Selecione uma Categoria');
      return;
    }
    try {
      await putCategorys(data.id, name, category, userToken);
      alert('PlayList editada com sucesso');
      handleRefresh();
    } catch (error) {
      console.log(error);
      alert('Erro ao editar a PlayList');
    }
  }

  const getCategory = async () => {
    try {
      const response = await axios.get(`http://144.22.182.223/categorias/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
      });
      setListCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };


useEffect(() => {
  getCategory();
}, []);

const handleRefresh = async () => {
  setRefreshing(true);
  try {
    await getCategory();
  } finally {
    setRefreshing(false);
  }
};
const nameInput = createRef();

return (
  <SafeAreaView style={styles.container}>
    <LinearGradient colors={['#dc462d', '#eb7c2d']} style={styles.header}>
      <TouchableOpacity style={styles.iconBorder} onPress={() => {
        navigation.goBack();
      }}>
        <Icon name={'arrow-back-outline'} size={30} color={'#ffffff'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Área do Administrador</Text>
    </LinearGradient>
    <ScrollView>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Editar PlayList</Text>
        <Line length={240} diamondSize={10} color="#E6652E" />
      </View>
      <View style={styles.contentInput}>
        <Inputs
          ref={nameInput}
          placeholder='Digite o titulo'
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Categoria:</Text>
        <Line length={160} diamondSize={10} color="#E6652E" />
      </View>
      <View style={styles.contentList}>
        <CategoryList dataCategory={DataCategory} onSelectCategory={setCategory} />
      </View>
      <View style={styles.contentTitle}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <Text style={styles.title}>Videos:</Text>
          <TouchableOpacity onPress={handleRefresh} disabled={refreshing} style={[styles.iconBorder, { borderColor: '#000000' }]}>
            <Icon name={'refresh'} size={30} color={'#E6652E'} />
          </TouchableOpacity>
        </View>
        <Line length={125} diamondSize={10} color="#E6652E" />
      </View>
      <View style={styles.contentButtonCard}>
        <TouchableOpacity
          style={[styles.iconBorder, { borderColor: '#000000' }]}
          onPress={() => navigation.navigate('AddVideo', { data: data })}
        >
          <Icon name={'add-outline'} size={25} color={'#FF6B00'} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentVideos}>
        <FlatList
          refreshing={refreshing}
          onRefresh={handleRefresh}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listCategory.videos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => {
            return (
              <EditCard
                key={item.id}
                video={item}
                poster_path={item.file}
                text={item.titulo}
                author={item.autor}
                categoriaId={data.id}
              />
            );
          }}
        />


      </View>
      <View style={styles.contentButton}>
        <CustomButton
          text="Confirmar"
          backgroundColor="#FF6B00"
          textColor="#FFFFFF"
          onPress={putCategory}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
}
