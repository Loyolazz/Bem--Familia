import { StyleSheet } from "react-native";

const CARD_WIDTH = 170;
const CARD_HEIGHT = 120;
const MAX_TITLE_LENGTH = 22;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  cardContainer:{
    paddingTop: 10
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: '#EFEFF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#111111', 
  },
  title: {
    color: '#111111',
    width: CARD_WIDTH,
    overflow: 'hidden',
    fontSize: 13,
    fontFamily: 'IstokWeb-Bold'
  },
  titleContainer:{
    bottom: 20,
  },
  persona: {
    paddingStart: 5,
    color: '#111111',
    fontFamily: 'IstokWeb-Bold'
  },
  playIcon: {
    bottom: CARD_HEIGHT / 2,
    left: CARD_WIDTH / 2,
    marginLeft: -25,
    marginTop: -25,
  },
});

export default styles