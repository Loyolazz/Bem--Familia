import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import imagePath from './imagePath';
import style from './styles'
import { useNavigation } from '@react-navigation/native';

const DropDownMap = ({ value = [], values = {}, onSelected = () => { } }) => {
  const [showOption, setShowOption] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();
  
  const onSelectItem = val => {
    setShowOption(false);
    onSelected(val);
    navigation.navigate('Schedule') 
  };

  const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);

    React.useEffect(() => {
      toggleModal();
    }, [visible]);
  
    const toggleModal = () => {
      if (visible) {
        setShowModal(false)
      } else {
        setShowModal(true)
      }
    }

    return (
      <Modal transparent visible={showModal}>
        <View style={style.ModalBackground}>
          <View style={style.ModalView}>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text style={{ fontWeight: 'bold', left: 260, bottom: 12}}>X</Text>
          </TouchableOpacity>
            <Text style={{ paddingBottom: 10, bottom: 10, paddingLeft: 5, color: '#111' }}>Selecione a Região desejada:</Text>
            {children}
          </View>
        </View>
      </Modal>
    )
  }
  

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.dropdown}
        activeOpacity={0.9}
        onPress={() => setShowOption(!showOption)}>
        <Text style={{ left: 8, color: '#111111' }}>{!!values ? values?.name : `Localização`}</Text>
        <Image
          style={{
            transform: [{ rotate: showOption ? '180deg' : '0deg' }],
          }}
          source={imagePath.icDropDown}
        />
      </TouchableOpacity>
      {showOption && (
        <ModalPopup
          visible={visible}
        >
          <View
            style={{
              paddingVertical: 4,
              borderRadius: 4,
              paddingHorizontal: 4,
              marginBottom: 10,
              height: 130,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {value.map((val, i) => {
                return (
                  <TouchableOpacity
                    key={String(i)}
                    onPress={() => onSelectItem(val) }
                    style={{
                      ...style.selectedItemStyle,
                      backgroundColor: '#EFEFF0',
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#111111'
                      }}>
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </ModalPopup>
      )}
    </View>
  );
};

export default DropDownMap;