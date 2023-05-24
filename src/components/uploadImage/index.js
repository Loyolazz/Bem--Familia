import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const UploadImage = ({ onImageSelected }) => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [visible, setVisible] = useState(false);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, (response) => {
      if (!response.didCancel && !response.errorCode) {
        setPickerResponse(response);
      }
    });
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  useEffect(() => {
    if (pickerResponse && onImageSelected) {
      onImageSelected(pickerResponse.assets[0]);
    }
  }, [pickerResponse, onImageSelected]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} title="Selecionar imagem" onPress={onImageLibraryPress}>
        <View style={styles.iconBorder}>
          <Icon name={'add-outline'} size={20} color={'#FF6B00'} />
        </View>
        <Text style={styles.text}>Pesquisar imagem no documento</Text>
      </TouchableOpacity>
      {pickerResponse && <Image source={{uri}} style={styles.image} />}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'

  },
  input: {
    height: 50,
    color: '#19191B',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    color: '#19191B',
    fontFamily: 'IstokWeb-Bold',
    marginHorizontal: 20,
  },
  iconBorder: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginHorizontal: 10,
  },
  image: {
    height: 120,
    width: 200,
  },
});

export default UploadImage;
