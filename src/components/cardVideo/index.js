import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style'

const CardVideo = memo(({ text, posterPath, onPress, loc, isNewCARD, isSearchCard, note }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, isNewCARD && styles.favoriteContainer, isSearchCard && styles.newCardContainer]}>
        <Image
          style={[styles.image, isSearchCard && styles.newCardImage]}
          source={{ uri: `http://144.22.215.111/uploads/${posterPath}` }}
        />
        <View style={[styles.detailsContainer, isSearchCard && styles.newCardDetailsContainer]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text numberOfLines={2} style={[styles.textTitle, isNewCARD && styles.favoriteTextTitle, isSearchCard && styles.newCardTextTitle]}>
              {text.length > 35 ? `${text.slice(0, 35)}...` : text}
            </Text>

          </View>
          <View style={styles.locContainer}>
            <Icon name='person-circle-outline' size={25} color='#636363' style={styles.locIcon} />
            <Text style={[styles.textLoc, isNewCARD && styles.favoriteTextLoc, isSearchCard && styles.newCardTextAuthor]}>{loc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});


export default CardVideo