import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: height,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 155,
  },
  sectionHeaderText: {
    fontSize: 20,
    color: '#979797',
    opacity: 50,
    fontFamily: 'IstokWeb',
    fontWeight: 'bold',
    lineHeight: 28.79
  },
  flatListContainer: {
    flex: 1,
  },
  emptyListText: {
    alignSelf: 'center',
    marginTop: 20,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchIcon: {
    color: 'black',
    size: 30
  },
  flatListContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  flatListFooter: {
    marginBottom: 20,
  },
  searchBarInputContainer: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 15,
    width: 350,
  },
});

export default styles;