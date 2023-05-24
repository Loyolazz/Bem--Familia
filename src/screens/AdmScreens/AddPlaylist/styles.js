import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerText:{
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: 'IstokWeb-Bold',
    marginLeft: 25
  },
  iconBorder:{
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9
  },
  contentTitle: {
    flex: 1,
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: "#E6652E",
    marginLeft: 30,
    marginBottom: 10,
    fontFamily: 'IstokWeb-Bold'
  },
  contentInput: {
    flex: 1,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  contentList: {
    flex: 1,
    width: '100%',
    height: 100,
    paddingHorizontal: 10,
  },
  contentButton: {
    flex: 1,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
