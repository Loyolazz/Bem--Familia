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
  content: {
    paddingTop: 80,
    width: '100%',
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
    paddingTop: 10,
    textAlign: 'center' 
  },
  text: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: '#19191B',
    top: 80,
    right: 20
  },
});

export default style;
