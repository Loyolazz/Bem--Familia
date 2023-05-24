import React, {useState} from 'react';
import {Image, TouchableOpacity, SafeAreaView, View, Text, ScrollView} from 'react-native';
import style from './style';
import ImgMap from './ImgPath';
import DropDownMap from '../../../components/dropdown/dropdownMap';
import {filterLoc} from '../../SetScreens/Search/filters/filters';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Map({navigation}) {
  const [selectItemLoc, setSelectItemLoc] = useState(null);

  const onSelected = item => {
    setSelectItemLoc(item);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={{paddingRight: 30, top: 30}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-back-outline'} size={40} color={'#19191B'} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', bottom: 100}}>
        <Text style={style.text}>Selecione o Local Desejado:</Text>
      </View>
      <View style={{alignItems: 'center', top: 80}}>
        <DropDownMap
          values={selectItemLoc}
          onSelected={onSelected}
          value={filterLoc}
        />
      </View>
      <View style={{position: 'absolute'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.amazonia} source={ImgMap.Amazonia} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.acre} source={ImgMap.Acre} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.rondonia} source={ImgMap.Rondonia} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.roraima} source={ImgMap.Roraima} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.para} source={ImgMap.Para} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.matogrosso} source={ImgMap.MatoGrosso} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.amapa} source={ImgMap.Amapa} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.tocantins} source={ImgMap.Tocantins} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.piaui} source={ImgMap.Piaui} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.maranhao} source={ImgMap.Maranhao} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.goias} source={ImgMap.Goias} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.matogrossodosul} source={ImgMap.MatoGrossoSul} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.saopaulo} source={ImgMap.SaoPaulo} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.minasgerais} source={ImgMap.MinasGerais} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.distrito} source={ImgMap.Distrito} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.santacatarina} source={ImgMap.SantaCatarina} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.parana} source={ImgMap.Parana} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.riograndedosul} source={ImgMap.RioGrandeSul} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.rio} source={ImgMap.Rio} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.espiritosanto} source={ImgMap.Espirito} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.bahia} source={ImgMap.Bahia} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.sergipe} source={ImgMap.Sergipe} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.alagoas} source={ImgMap.Alagoas} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.pernambuco} source={ImgMap.Pernambuco} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.paraiba} source={ImgMap.Paraiba} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image style={style.ceara} source={ImgMap.Ceara} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Schedule');
          }}>
          <Image
            style={style.riograndedonorte}
            source={ImgMap.RioGrandeNorte}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
