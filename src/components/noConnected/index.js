import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NoInternetWarning() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Icon name="exclamation-triangle" size={24} color="white" />
        <Text style={styles.text}>Sem conexão com a internet</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4d4d',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
});