import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  dropdown: {
    borderColor: '#000000',
    backgroundColor: '#EFEFF0',
    borderWidth: 1,
    borderRadius: 10,
    width: 145,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  selectedItemStyle: {
    paddingVertical: 4,
    borderRadius: 7,
    paddingHorizontal: 1,
    marginBottom: 3
  }, 
  ViewinModal: {
    paddingVertical: 2,
    borderRadius: 4,
    paddingHorizontal: 4,
    marginBottom: 100,
    height: 140,
  },
  ModalView: {
    width: '80%',
    height: 224,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  ModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style