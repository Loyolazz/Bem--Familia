import React, { useState, createRef, useEffect, useContext } from 'react';

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
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../../components/customButton';
import UploadImage from '../../../components/uploadImage';
import { PermissionsAndroid } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../../../context';
import { putVideos } from '../../../services/api';


export default function EditVideo({ navigation }) {
  const route = useRoute();
  const data = route.params?.data;
  const categoryId = data.categoria_videos.categoria_id;

  const [author, setAuthor] = useState(data.autor);
  const [title, setTitle] = useState(data.titulo);
  const [link, setLink] = useState(data.link);
  const [image, setImage] = useState(data.url);
  /*   const [description, setDescription] = useState(null); */
  const authorInput = createRef();
  const titleInput = createRef();
  const linkInput = createRef();
  /*  const descriptionInput = createRef(); */

  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    requestStoragePermission();
  }, []);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permissão para acessar as imagens',
          message:
            'O aplicativo precisa da sua permissão para acessar as imagens armazenadas no dispositivo.',
          buttonNeutral: 'Pergunte-me depois',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida');
      } else {
        console.log('Permissão negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const put = async () => {
    const formData = new FormData();
    formData.append('file', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    },
    formData.append("titulo", `${title}`),
    formData.append("descricao", "teste"),
    formData.append("localizacao", " teste"),
    formData.append("link", `${link}`),
    formData.append("autor", `${author}`),
    );
    if (!author) {
      alert('Digite o nome do autor');
      return;
    }
    if (!title) {
      alert('Digite o titulo do video');
      return;
    }
    if (!link) {
      alert('Digite o link do video');
      return;
    }
    try {
      await putVideos(categoryId, data.id, formData, userToken);
      alert('PlayList atualizada com sucesso');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert('Erro ao atualizar a PlayList');
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#dc462d', '#eb7c2d']} style={styles.header}>
        <TouchableOpacity style={styles.iconBorder}>
          <Icon name={'arrow-back-outline'} size={30} color={'#ffffff'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Área do Administrador</Text>
      </LinearGradient>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Editar Video</Text>
          <Line length={240} diamondSize={10} color="#E6652E" />
        </View>
        <View style={styles.contentInput}>
          <Inputs
            ref={authorInput}
            placeholder=''
            autoCapitalize="none"
            autoCorrect={false}
            value={author}
            onChangeText={(text) => setAuthor(text)}
          />
        </View>
        <View style={styles.contentInput}>
          <Inputs
            ref={titleInput}
            placeholder=''
            autoCapitalize="none"
            autoCorrect={false}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.contentInput}>
          <Inputs
            ref={linkInput}
            placeholder=''
            autoCapitalize="none"
            autoCorrect={false}
            value={link}
            onChangeText={(text) => setLink(text)}
          />
        </View>
        {/*       <View style={styles.contentInput}>
        <Inputs
          ref={descriptionInput}
          placeholder="Link"
          autoCapitalize="none"
          autoCorrect={false}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View> */}
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Editar imagem:</Text>
          <Line length={250} diamondSize={10} color="#E6652E" />
        </View>
        <View style={styles.contentUpload}>
          <UploadImage onImageSelected={setImage} />
        </View>
        <View style={styles.contentButton}>
          <CustomButton
            text="Confirmar"
            backgroundColor="#FF6B00"
            textColor="#FFFFFF"
            onPress={put}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
