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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  content: {
    width: width,
    height: height,
    flex: 1,
    paddingVertical: '20%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    height: '15%',
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
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    height: 50,
    width: 282,
    marginTop: 10,
    backgroundColor: '#093D73',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 15,
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'IstokWeb-Bold',
  },
  text: {
    width: '100%',
    marginTop: 12,
    textAlign: 'left',
    color: '#111111',
    fontFamily: 'IstokWeb-Bold',
  },
  textMail: {
    width: '100%',
    marginTop: 12,
    textAlign: 'left',
    color: '#AFB1B6',
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
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
    color: '#AFB1B6',
    bottom: 40,
    fontFamily: 'IstokWeb-Bold',
  },
  text4: {
    width: '60%',
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
    fontFamily: 'IstokWeb-Bold',
  },
  text5: {
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
    right: 125,
    fontFamily: 'IstokWeb-Bold',
  },
  text6: {
    width: '100%',
    fontSize: 12,
    textAlign: 'center',
    color: '#111111',
    fontFamily: 'IstokWeb-Bold',
  },
});

export default style;
