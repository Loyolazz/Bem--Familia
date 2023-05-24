import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const style = StyleSheet.create({

  container: {

    width: width,
    height: height,
    backgroundColor: '#11111f',

  },

  image: {
    flex: 1,
    height: height,
    width: width

  },

  button: {
    height: 93,
    width: 400,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#ffffff'

  },
  textButton: {
    color: '#111111',
    fontWeight: 'bold',
    fontSize: 30
  },
  textButton2: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default style;
