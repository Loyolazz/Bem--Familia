import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

const style = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content: {
    width: width,
    flex: 1,
    paddingVertical: '50%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    height: '35%',

  },

  input: {
    color: '#111111',
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 36,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FF6B00',
    borderRadius: 15,
  },
  button: {
    height: 50,
    width: 282,
    marginTop: 20,
    backgroundColor: '#D6D6D6',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  button2: {
    height: 50,
    width: 282,
    marginTop: 20,
    backgroundColor: '#FF6B00',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  textButton: {
    color: '#111111',
    fontWeight: 'bold',
  },
  textButton2: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'IstokWeb-Bold',
  },
  text: {
    width: '100%',
    fontSize: 12,
    marginTop: 7,
    textAlign: 'right',
    color: '#111111',
    fontFamily: 'IstokWeb-Bold',
  },
  text1: {
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
    color: '#AFB1B6',
    bottom: 50,
  },
  text2: {
    width: '100%',
    fontSize: 30,
    textAlign: 'left',
    color: '#111111',
    bottom: 50,
    fontFamily: 'IstokWeb-Bold',
  },
  text3: {
    width: '110%',
    fontSize: 15,
    textAlign: 'center',
    color: '#111111',
    bottom: 4,
    fontFamily: 'IstokWeb-Bold',
    padding: 5,
  },
  textMail: {
    width: '100%',
    marginTop: 12,
    textAlign: 'left',
    color: '#AFB1B6',
  },
  text4: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    color: '#FF6B00',
    bottom: 25,
    fontFamily: 'IstokWeb-Bold',
  },
  text5: {
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
    paddingHorizontal: 20,
    color: '#AFB1B6',
    bottom: 30,
  },
});

export default style;