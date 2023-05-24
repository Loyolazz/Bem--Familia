import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '30%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  image: {
    width: 163,
    height: 88,
    margin: 40
  },
  contentTitle: {
    width: '100%',
    height: '13%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: "#E6652E",
    marginLeft: 30,
    fontFamily: 'Heavitas'
  },
  subTitle: {
    fontSize: 13,
    color: "#000000",
    opacity: 0.2,
    marginLeft: 30,
    fontFamily: 'IstokWeb-Bold'
  },
  contentMenu: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  menu: {
    width: 364,
    height: 112,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderRadius: 15,
  },
  textMenu: {
    fontSize: 20,
    color: "#FF6B00",
    marginRight: 20,
    marginBottom: 5,
    fontFamily: 'IstokWeb-Bold'
  },
  iconMenu: {
    marginBottom: 5,
    marginRight: 10,
  },
  contentRetangle: {
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  retangle: {
    width: 100,
    borderBottomWidth: 3,
    borderColor: '#FF6B00',
    margin: 15
  },
  
});

export default styles;
