import React, {useState, useImperativeHandle} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Inputs = React.forwardRef((props, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);
  const inputRef = React.createRef();

  useImperativeHandle(ref, () => ({
    focusOnError(){
      setError(true)
      inputRef.current.focus()
    },
    resetError(){
      setError(false)
    }
  }))

  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        ref={inputRef}
        underlineColorAndroid="transparent"
        placeholderTextColor="#19191B"
        style={[styles.input,{borderColor: error ? '#E91E63' : '#000000'}]}
        {...props}
        secureTextEntry={sec}
      />
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)}>
          <Icon
            name={sec ? "eye" : "eye-off"}
            size={26}
            color={error ? '#E91E63' : '#7b8794'}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  input: {
    flex: 1,
    height: 60,
    color: "#19191B",
    paddingLeft: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 15,
    fontFamily: 'IstokWeb-Bold'
  },
  icon: {
    position: 'absolute',
    left: 7,
    top: 17,
  },
  iconSecret: {
    position: 'absolute',
    right: 7,
    top: 15,
  },
});

export default Inputs;
