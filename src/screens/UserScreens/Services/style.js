import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '25%'
  },
  card: {
    height: 123,
    width: 138,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 8,
  },
  textButton: {
    color: '#61646B',
    paddingTop: 10
  },
  text: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    color: '#19191B',
  },
});

export default style;
