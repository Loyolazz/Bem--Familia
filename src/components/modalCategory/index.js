import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Modal,
    StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../../context';
import { deleteCategorys, getCategorias } from '../../services/api';
import { useNavigation } from '@react-navigation/native';



export default function CategoryModal(props) {
    const { modalVisible, setModalVisible, option } = props;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [nameCategory, setNameCategory] = useState(null);
    const [pickerEnabled, setPickerEnabled] = useState(false);
    const [listCategoria, setListCategoria] = useState([]);

    const getCategoria = async () => {
        try {
            const response = await getCategorias();
            setListCategoria(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCategoria()
    }, [])


    const { userToken } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleDelete = async () => {
        if (!selectedCategory) {
            alert('Selecione uma playlist');
            return;
        }
        const selectedCategoryObject = listCategoria.find((category) => category.id === selectedCategory);
    if (selectedCategoryObject.videos.length > 0) {
        alert('Não é possível excluir uma playlist que tenha vídeos');
        return;
    }
        try {
            await deleteCategorys(selectedCategory, userToken);
            alert('playlist removida com sucesso');
            setModalVisible(false);
        } catch (error) {
            console.log(error);
            alert('Erro ao remover a playlist');
        }
    }
    const handleEdit = async () => {
        if (!selectedCategory) {
            alert('Selecione uma playlist');
            return;
        }
        try {
            const selectedCategoryObject = listCategoria.find((category) => category.id === selectedCategory);
            navigation.navigate('EditPlaylist', { data: selectedCategoryObject });
            setModalVisible(false);
        } catch (error) {
            console.log(error);
            alert('Erro ao editar');
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setPickerEnabled(true);
        }, 100);
        return () => clearTimeout(timeoutId);
    }, []);

    if (option === 'delete') {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Tem certeza que deseja excluir a playlist {nameCategory}?
                        </Text>
                        <View style={styles.dropdownContainer}>
                            <Picker
                                accessibilityLabel="Selecione a playlist a ser excluída"
                                selectedValue={selectedCategory}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedCategory(itemValue);
                                    const selectedCategoryName = listCategoria[itemIndex - 1].nome;
                                    setNameCategory(selectedCategoryName);
                                }}
                                style={styles.dropdown}
                                enabled={pickerEnabled}>
                                <Picker.Item label="Selecione uma playlist:" value={null} />
                                {listCategoria.map((category) => (
                                    <Picker.Item key={category.id} label={category.nome} value={category.id} style={styles.dropdownItem} />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.deleteButton]}
                                onPress={handleDelete}>
                                <Text style={styles.modalButtonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
    if (option === 'edit') {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Editar a playlist {nameCategory}?
                        </Text>
                        <View style={styles.dropdownContainer}>
                            <Picker
                                accessibilityLabel="Selecione a playlist a ser editada"
                                selectedValue={selectedCategory}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedCategory(itemValue);
                                    const selectedCategoryName = listCategoria[itemIndex - 1].nome;
                                    setNameCategory(selectedCategoryName);
                                }}
                                style={styles.dropdown}
                                enabled={pickerEnabled}>
                                <Picker.Item label="Selecione uma playlist:" value={null} />
                                {listCategoria.map((category) => (
                                    <Picker.Item key={category.id} label={category.nome} value={category.id} style={styles.dropdownItem} />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.deleteButton]}
                                onPress={handleEdit}>
                                <Text style={styles.modalButtonText}>Editar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
        width: '80%',
        alignItems: 'center'
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'IstokWeb-Bold'
    },
    dropdownContainer: {
        marginBottom: 20,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
    },
    dropdownItem: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'IstokWeb-Bold'
    },
    dropdown: {
        height: 40,
        width: '100%',
        color: '#000000',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%'
    },
    cancelButton: {
        backgroundColor: '#ccc'
    },
    deleteButton: {
        backgroundColor: '#E6652E'
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'IstokWeb-Bold'
    }
});