import React, { useMemo, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { deleteVideos } from '../../services/api';
import { AuthContext } from '../../context/index';



const MAX_TITLE_LENGTH = 22;

const EditCard = ({ text, poster_path, author, video, categoriaId }) => {

  const { userToken } = useContext(AuthContext);

  const imageUrl = useMemo(() => `http://144.22.182.223/uploads/${poster_path}`, [poster_path]);
  const navigation = useNavigation();
  const truncatedTitle = useMemo(() => {
    if (text.length > MAX_TITLE_LENGTH) {
      return text.slice(0, MAX_TITLE_LENGTH) + '...';
    }
    return text;
  }, [text]);

  const handleEdit = () => {
    if (!video) {
      alert('Selecione um Video');
      return;
    }
    try {
      navigation.navigate('EditVideo', { data: video});
    } catch (error) {
      console.log(error);
      alert('Erro ao editar Video');
    }
  };
  

  const handleDelete = async () => {
    if (!video) {
        alert('Selecione um video');
        return;
    }
    console.log(video.id)
    try {
        await deleteVideos(categoriaId, video.id, userToken);
        alert('Video removido com sucesso');
        navigation.goBack();
    } catch (error) {
        console.log(error);
        alert('Erro ao remover o Video');
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.imageContent}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={handleEdit}>
            <Icon
              name={'create-outline'}
              size={30}
              color={'#FF6B00'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Icon
              name={'trash-outline'}
              size={30}
              color={'#FF6B00'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.title}>
          {truncatedTitle}
        </Text>
        <View style={styles.authorContent}>
          <Icon name={'person-circle-outline'} size={30} color={'#61646B'} />
          <Text style={styles.author}>
            {author}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EditCard;
