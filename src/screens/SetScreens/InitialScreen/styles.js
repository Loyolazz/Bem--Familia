import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20
  },
  header: {
    flex: 1.5,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '40%',
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
    top: 100,
  },
  button2: {
    height: 50,
    width: 282,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    top: 100,
  },
  button3: {
    height: 24,
    width: 110,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#AFB1B6',
    borderRadius: 10,
  },

  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'IstokWeb-Regular',
  },
  textButton2: {
    color: '#000000',
    fontWeight: 'bold',
  },
  text: {
    color: '#AFB1B6',
    fontWeight: 'bold',
    fontSize: 11,
    left: 80,
  },
  text1: {
    color: '#AFB1B6',
    fontWeight: 'bold',
    fontSize: 11,
  },
  text2: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default style;
