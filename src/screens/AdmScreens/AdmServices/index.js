import { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import CategoryModal from '../../../components/modalCategory';
import Logo from '../../../assets/logo.png';
import styles from './styles';

const DATA = [
  {
    name: 'Adicionar PlayList',
    icon: 'add-circle-outline',
    page: 'AddPlaylist',
  },
  {
    name: 'Editar PlayList',
    icon: 'create-outline',
    page: 'edit',
  },
  {
    name: 'Excluir PlayList',
    icon: 'trash-outline',
    page: 'delete',
  },
];

export default function AdmServices({ navigation }) {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const handlePress = (item) => {
    if (item.page === 'delete') {
      setModalVisible1(true);
      setModalVisible2(false);
    } else if (item.page === 'edit') {
      setModalVisible1(false);
      setModalVisible2(true);
    } else {
      navigation.navigate(item.page);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisible1 && (
        <CategoryModal
          modalVisible={modalVisible1}
          setModalVisible={setModalVisible1}
          option="delete"
        />
      )}
      {modalVisible2 && (
        <CategoryModal
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}
          option="edit"
        />
      )}
      <LinearGradient colors={['#dc462d', '#eb7c2d']} style={styles.header}>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </LinearGradient>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Selecione o serviço desejado</Text>
        <Text style={styles.subTitle}>#Selecione o conteúdo desejado</Text>
      </View>
      <View style={styles.contentMenu}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.name}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.menu}>
              <Icon name={item.icon} size={30} color="#FF6B00" style={styles.iconMenu} />
              <Text style={styles.textMenu}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.contentRetangle}>
        <View style={styles.retangle} />
      </View>
    </SafeAreaView>
  );
}
