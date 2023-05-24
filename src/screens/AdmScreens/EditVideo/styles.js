import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '14%',
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
    justifyContent: 'center',
    height: 100
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
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  contentUpload: {
    flex: 1,
    width: '100%',
    maxHeight: 200,
    paddingHorizontal: 20,
  },
  contentButton: {
    flex: 1,
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default styles;
