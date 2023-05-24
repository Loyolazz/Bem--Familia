import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../context/index'
import axios from 'axios';


export default function (props) {
    const [visible, setVisible] = useState(false)
    const [evaluation, setEvaluation] = useState(null);

    const { userToken } = useContext(AuthContext);

   

    const sendRating = async() => {
        try {
          const response = await axios.post(`http://144.22.215.111/avaliacoes/${props.id}`, {
            pontuacao: evaluation
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${userToken}`
            }
          });
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                style={{}}
            >
                <View style={styles.modal}>
                    <TouchableOpacity style={{paddingLeft: 220, Button: 20}}
                    onPress={() => { setVisible(false) }}>
                        <Text style={styles.text}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}> Avalie o video!</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20 }}>
                        <TouchableOpacity onPress={() => {
                            setEvaluation(1)
                        }} >
                            <Icon name={'star'} size={25} color={evaluation >= 1 ?'#FFBF00' : '#E0E0E0'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => {
                            setEvaluation(2)
                        }}>
                            <Icon name={'star'} size={25} color={evaluation >= 2 ?'#FFBF00' : '#E0E0E0'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setEvaluation(3)
                        }}>
                            <Icon name={'star'} size={25} color={evaluation >= 3 ?'#FFBF00' : '#E0E0E0'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setEvaluation(4)
                        }}>
                            <Icon name={'star'} size={25} color={evaluation >= 4 ?'#FFBF00' : '#E0E0E0'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setEvaluation(5)
                        }}>
                            <Icon name={'star'} size={25} color={evaluation >= 5 ?'#FFBF00' : '#E0E0E0'} style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <Button title='ENVIAR'
                        onPress={() => { 
                            sendRating()
                            setVisible(false) 
                            }} />
                </View>
            </Modal>
            <TouchableOpacity style={styles.avaliar}
                onPress={() => { 
                    setVisible(true) 
                    }}>
                <Text style={styles.text2}>Avaliar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#ffffff',
        width: 300,
        height: 200,
        borderRadius: 20,
        elevation: 10,
        top: 250,
        left: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    avaliar: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    text: {
        fontSize: 20,
        color: '#111111',
        fontFamily: 'IstokWeb-Bold'
    },
    text2: {
        fontSize: 21,
        color: '#FFFFFF',
        fontFamily: 'IstokWeb-Bold'

    }
});


