import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/index'

const FavoriteButton = (props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://144.22.182.223/favoritos`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${userToken}`
          }
        });
  
        const { data } = response;
  
        if (data.length > 0) {
          data.forEach(item => {
            if (item.id === props.id) {
              setIsFavorited(true);
            }
          })
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const toggleFavorite = async () => {
    try {
      if (isFavorited) {
        await axios.delete(`http://144.22.182.223/favoritos/${props.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${userToken}`
          }
        })
        setIsFavorited(false);
      }

      if (!isFavorited) {
        await axios.post(`http://144.22.182.223/favoritos/${props.id}`, {}, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${userToken}`
          }
        })
        setIsFavorited(true);
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <TouchableOpacity style={styles.favorite} onPress={toggleFavorite}>
      <Icon name={isFavorited ? 'bookmark' : 'bookmark-outline'} size={40} color={isFavorited ? '#FFBF00' : '#000000'} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  favorite: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
})
export default FavoriteButton;
