import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10
  },
  content: {
    width: '100%',
    paddingTop: 50,
    padding: 16,
  },
  input: {
    color: '#111111',
    height: 50,
    width: 370,
    backgroundColor: '#FFFFFF',
    paddingLeft: 36,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    height: 50,
    width: 282,
    marginTop: 20,
    backgroundColor: '#093D73',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  image: {
    justifyContent: 'flex-end',
    paddingTop: '5%',
    height: '20%',
  },
  text: {
    color: '#111111',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
    color: '#AFB1B6',
    bottom: 40,
    fontFamily: 'IstokWeb-Bold',
  },
  text2: {
    width: '100%',
    fontSize: 36,
    textAlign: 'left',
    color: '#111111',
    bottom: 40,
    fontFamily: 'IstokWeb-Bold',
  },
  text3: {
    width: '75%',
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
    fontFamily: 'IstokWeb-Bold',
  },

  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'IstokWeb-Bold',
  },
});

export default style;
