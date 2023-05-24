import React, { useState, createRef, useContext } from 'react';

import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../../../components/Line';
import Inputs from '../../../components/input';
import CategoryList from '../../../components/categoryItens';
import DataCategory from '../../UserScreens/Category/ListCategory'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../components/customButton';
import { postCategorys } from '../../../services/api';
import { AuthContext } from '../../../context';


export default function AddPlaylist({ navigation }) {
  
  const [category, setCategory] = useState(null);
  const [name, setName] = useState(null);

  const { userToken } = useContext(AuthContext);
  const nameInput = createRef();

  const postCategory = async () => {
    if (!name) {
      alert('Digite um titulo');
      return;
    }
    if (!category) {
      alert('Selecione uma Categoria');
      return;
    }
    try {
        await postCategorys(name, category, userToken);
        alert('PlayList adicionada com sucesso');
        navigation.goBack();
    } catch (error) {
        console.log(error);
        alert('Erro ao adicionar a PlayList');
    }
}

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
        <Text style={styles.title}>Adicionar PlayList</Text>
        <Line length={240} diamondSize={10} color="#E6652E" />
      </View>
      <View style={styles.contentInput}>
        <Inputs
          ref={nameInput}
          placeholder="Titulo"
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
        <CategoryList dataCategory={DataCategory} onSelectCategory={setCategory}/>
      </View>
      <View style={styles.contentButton}>
        <CustomButton
          text="Confirmar"
          backgroundColor="#FF6B00"
          textColor="#FFFFFF"
          onPress={postCategory}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
