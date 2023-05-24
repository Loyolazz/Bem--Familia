import React, { useState } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../../../components/Line';
import style from './style';
import Logo from '../../../assets/logo.png';

const faqList = [
  {
    id: 1,
    question: 'O QUE É?',
    answer:
      'O BEM FAMÍLIA é um projeto do grupo Ser Educacional que tem a finalidade de divulgar práticas educativas e formativas de orientações aos pais e responsáveis através de dramatizações, podcast, vídeos de curta duração,ensaios de jogos teatrais, jogos digitais e outros.\nAlém de refletir acerca de temas diversos, o BEM FAMÍLIA também é um hub de conexão com as clínicas do grupo SER EDUCACIONAL. É possível agendar consultas presenciais e remotas em todas as nossas clínicas espalhadas pelo Brasil. É o bem-estar e a qualidade de vida na palma das suas mãos',
  },
  {
    id: 2,
    question: 'O CONTEÚDO É GRATUITO?',
    answer: 'Sim, todo o conteúdo é gratuito.',
  },
  {
    id: 3,
    question: 'QUAIS AS LINHAS DE TRABALHO DO BEM FAMÍLIA?',
    answer:
      '1 Educação e Saúde - Desenvolver diálogos interdisciplinares em relação a saúde que valorizem o bem-estar na escola básica. \n2 Educação e Trabalho - Discutir com as diversas áreas do saber possibilitando aos  pais e responsáveis orientações do cuidar e educar. \n3 Conteúdos digitais e Escola - Promover orientações sobre o universo digital, o brincar e a criança, favorecendo as práticas sociais do mundo tecnológico. \n4 Práticas Inclusivas – Possibilitar práticas inclusivas, que torne a educação capaz de acolher todo indivíduo, independente das diferenças, suprimindo os preconceitos existentes entre os diversos povos e culturas. \n5 Educação e Neuro psicopedagogia - Contribuir com as discussões e entendimento das dificuldades cognitivas, facilitando o processo de aprendizagem e a comunicação no desenvolvimento humano. \n 6 Educação e Direito - Colaborar com informações e discussões que trabalhem o direito a vida, possibilitando informações jurídicas que contribuíam com pais e responsáveis no desenvolvimento humano.',
  },
  {
    id: 4,
    question: 'QUEM FORAM SEUS DESENVOLVEDORES?',
    answer:
      'DEV: Arthur Araújo Loyola\nhttps://www.linkedin.com/in/arthur-araujo-loyola-a88bab154/;\n\nDEV: José Henrique Vieira da Cruz\nhttps://www.linkedin.com/in/josé-henrique-vieira-da-cruz-b2a6021b9/;\n\nDEV: Victor Breno Santos Rodrigues\nhttps://www.linkedin.com/in/victorbsr/;\n\nDesigner: Iran Gustavo\nhttps://www.linkedin.com/in/iran-gustavo-179a4a221/',
  },
];

export default function Faq({ navigation }) {
  const [selectedFaq, setSelectedFaq] = useState(null);

  function handleFaqSelect(id) {
    if (selectedFaq === id) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(id);
    }
  }

  function renderFaqItem(faq) {
    const isItemSelected = selectedFaq === faq.id;

    const buttonStyle = isItemSelected ? style.ButtonSelect : style.Button
    const buttonTextStyle = isItemSelected ? style.ButtonTextSelect : style.ButtonText

    return (
      <View key={faq.id}>
        <TouchableOpacity onPress={() => handleFaqSelect(faq.id)}>
          <View style={buttonStyle}>
            <Text style={buttonTextStyle}>{faq.question}</Text>
          </View>
        </TouchableOpacity>
        {isItemSelected && (
          <View style={style.contentAnswer}>
            <Text style={style.textAnswer}>{faq.answer.split('\n').map((item, key) => {
                return (
                  <Text key={key}>
                    {item.includes('http') ? 
                      <Text onPress={() => Linking.openURL(item)} style={{color: 'blue', textDecorationLine: 'underline'}}>
                        {item}
                      </Text> : 
                      item
                    }
                    {'\n'}
                  </Text>
                )
              })}
            </Text>
          </View>
        )}
      </View>
    );
  }
  //
  return (
    <SafeAreaView style={style.container}>
      <LinearGradient colors={['#005B96', '#093D73']} style={style.header}>
        <Image style={style.image} source={Logo} resizeMode="contain" />
      </LinearGradient>
      <View style={style.contentTitle}>
        <Text style={style.subtitle}>Saiba mais sobre</Text>
        <Text style={style.title}>O Bem Família</Text>
        <Text style={style.text}>#Agradecimento a todos os colaboradores</Text>
        <Line length={320} diamondSize={10} color="#093D73"/>
        </View>
        <ScrollView>     
        {faqList.map(faq => renderFaqItem(faq))}
        </ScrollView>
        <View style={style.contentAuthor}>
        <Line diamondSize={10} length={300} color="#093D73" />
        </View>
      
    </SafeAreaView>
  );
}
