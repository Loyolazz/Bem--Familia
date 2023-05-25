import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'IstokWeb-Bold',
  },
  greetingN: {
    textAlign: 'center',
    fontSize: 100,
    color: '#093D73',
    fontFamily: 'IstokWeb-Bold',
  },
  elipse: {
    width: 170,
    height: 170,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#093D73',
    top: 20,
  },
  contentCircle: {
    width: '100%',
    alignItems: 'center',
    position: 'relative'
  },
  greetingTextEmail: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'IstokWeb-Bold',
    marginTop: 10
  },
  contentlogout: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'IstokWeb-Bold',
    marginRight: 10
  },
  contentProfile: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  favoriteContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  favoriteTitle: {
    color: '#000000',
    fontSize: 22,
    fontFamily: 'IstokWeb-Bold',
    marginLeft: 25,
    marginBottom: 10
  },
  viewAllText: {
    color: '#3A00E5',
    fontSize: 15,
    left: 290,
    bottom: 20,
  },
  resetPassword: {
    color: '#FFFFFF',
    fontFamily: 'IstokWeb-Bold',
    fontSize: 16,
    textAlign: 'left'
  },
  button: {
    height: 40,
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: '#c11111',
    borderRadius: 100,
  },
  card: {
    height: 123,
    width: 201,
    backgroundColor: '#EFEFF0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#AFB1B6',
  },
  favorite: {
    height: 28,
    width: 28,
    backgroundColor: '#585555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  header: {
    width: '100%',
    height: 360,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyFavoriteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  emptyFavoriteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
});

export default style;
