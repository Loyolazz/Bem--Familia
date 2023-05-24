import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = ({ length, diamondSize, color }) => {
    const styles = StyleSheet.create({
        container: {
          width: length,
          height: 2,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        line: {
          height: 2,
          backgroundColor: color,
          flex: 1,
        },
        diamond: {
          width: diamondSize,
          height: diamondSize,
          backgroundColor: color,
          transform: [{ rotate: '45deg' }],
          marginLeft: -diamondSize / 2,
        },
      });
    
      return (
        <View style={styles.container}>
           <View style={styles.diamond} />
          <View style={styles.line} />
          <View style={styles.diamond} />
        </View>
      );
    };

export default Line;
