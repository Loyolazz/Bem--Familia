import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 170,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center'
  },
  imageContent: {
    height: 120,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    height: 120,
    width: 200,
    position: 'absolute',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000'
  },
  iconContent: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 70,
  },
  title: {
    color: '#000000',
    maxWidth: 190,
    fontSize: 15,
    fontFamily: 'IstokWeb-Bold',
  },
  authorContent: {
    width: 190,
    flexDirection: 'row',
    alignItems: 'center'
  },
  author: {
    color: '#000000',
    maxWidth: 180,
    fontSize: 12,
    fontFamily: 'IstokWeb-Bold',
  },

});

export default styles