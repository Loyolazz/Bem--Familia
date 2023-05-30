import React, { useCallback, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const MAX_TITLE_LENGTH = 22;

const CardCategory = ({ text, posterPath, onPress, loc, avaliacao, showRating }) => {
  const imageUrl = useMemo(() => `http://144.22.182.223/uploads/${posterPath}`, [posterPath]);
  const handlePress = useCallback(() => onPress(), [onPress]);

  const truncatedTitle = useMemo(() => {
    if (text.length > MAX_TITLE_LENGTH) {
      return text.slice(0, MAX_TITLE_LENGTH) + '...';
    }
    return text;
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
          />
          <Icon
            name={'play-circle-outline'}
            size={50}
            color={'#000000'}
            style={styles.playIcon}
          />
          {showRating && (
            <View style={styles.avaliacao}>
              <Icon name={'star'} size={20} color={'#FFBF00'} />
              <Text style={styles.persona}>
                {avaliacao}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {truncatedTitle}
        </Text>
        <View style={{ flexDirection: 'row', paddingBottom: 10, alignItems: 'center' }}>
          <Icon name={'person-circle-outline'} size={25} color={'#111111'} />
          <Text style={styles.persona}>
            {loc}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardCategory;