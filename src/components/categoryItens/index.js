import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoryList = ({ dataCategory, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataCategory}
            keyExtractor={item => item.name}
            numColumns={1}
            renderItem={({ item }) => {
                const page = `${item.page}`;
                const isSelected = item.name === selectedCategory;
                return (
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => handleSelectCategory(item.name)}>
                        <View style={[styles.border, isSelected && styles.selected]}>
                            <Icon name={item.icon} size={30} color={'#292D32'} />
                        </View>
                        <Text style={{ color: '#000000', fontFamily: 'IstokWeb-Bold' }}>
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        marginHorizontal: 15,
        justifyContent: 'center'
    },
    border: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9
    },
    selected: {
        borderColor: '#E6652E',
        borderWidth: 2,
    }
});

export default CategoryList;
