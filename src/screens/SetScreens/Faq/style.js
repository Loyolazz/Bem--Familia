import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
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
    height: '18%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: "#093D73",
    marginLeft: 30,
    fontFamily: 'IstokWeb-Bold'
  },
  subtitle: {
    fontSize: 13,
    color: "#093D73",
    marginLeft: 30,
    fontFamily: 'IstokWeb-Bold'
  },
  text: {
    fontSize: 13,
    color: "#000000",
    marginLeft: 30,
    fontFamily: 'IstokWeb-Bold',
    opacity: 0.5,
    marginBottom: 10
  },
  contentQuests: {
    flex: 1,
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  Button: {
    width: 364,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#093D73',
    marginTop: 30,
  },
  ButtonText: {
    color: '#000000',
    fontSize: 13,
    fontFamily: 'IstokWeb-Bold',
    marginLeft: 20,
    opacity: 0.5
  },
  ButtonTextSelect: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'IstokWeb-Bold',
    marginLeft: 40,
  },
  ButtonSelect: {
    width: 364,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#093D73',
    marginTop: 10
  },
  contentAuthor: {
    width: '100%',
    height: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 200
  },
  contentAnswer: {
    width: 364,
    maxHeight: 400,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#093D73',
    marginTop: 10,
  },
  textAnswer: {
    color: '#000000',
    fontSize: 13,
    fontFamily: 'IstokWeb-Bold',
    margin: 10
  },
});

export default style;
