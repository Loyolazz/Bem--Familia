import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  containerLoading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '70%',
    height: '60%',
    margin: 40
  },
  contentTitle: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentList: {
    flex: 1,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 20,
    color: "#000000",
    fontFamily: 'IstokWeb-Bold'
  },
  icon: {
    height: 140,
    width: 105,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#19191B',
  },
  card: {
    height: 123,
    width: 201,
    backgroundColor: '#EFEFF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#19191B',
  },
  cardText: {
    height: 23,
    width: 100,
    alignItems: 'flex-end',
    padding: 1,
    fontFamily: 'IstokWeb-Bold',
  },
  textCategory: {
    color: '#111111',
    fontSize: 20,
    width: 260,
    paddingStart: 20,
    paddingBottom: 10,
    fontFamily: 'IstokWeb-Bold',
  },
  textG: {
    color: '#093D73',
    fontSize: 17,
    fontFamily: 'IstokWeb-Bold',
  },
});

export default style;
