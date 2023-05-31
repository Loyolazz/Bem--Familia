import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import Toast from 'react-native-toast-message';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const isAdmin = userInfo && userInfo.usuario && userInfo.usuario.is_admin;

    const showErrorToast = (error) => {
        let message = "An error occurred";
        if (error.response) {
          if (error.response.status === 409) {
            message = "Registration conflict: This user already exists.";
          } else if (error.response.data.error) {
            message = error.response.data.error;
          } else if (error.response.data.errors) {
            message = error.response.data.errors.join("\n");
          }
        }
        Toast.show({
          topOffset: 50,
          type: "error",
          text1: 'Error',
          text2: message,
          props: {
            text2NumberOfLines: 6,
            style1: {
              height: 230,
            }
          }
        });
      };

    const register = async (nome, email, login, senha, setModalLoading, navigation) => {
        setModalLoading(true);
        try {
            const response = await axios.post(`http://144.22.182.223/cadastro`, {
                nome,
                email,
                login,
                senha,
            });

            const userInfo = response.data;

            alert('Usuário criado com sucesso!');

            navigation.navigate('Login');

        } catch (error) {
            showErrorToast(error);
            console.log(`Register error: ${error}`);
          } finally {
            setModalLoading(false);
          }
    };


    const login = async (login, senha, setModalLoading) => {
        setModalLoading(true);
        try {
            const response = await axios.post(`http://144.22.182.223/auth`, {
                login,
                senha,
            });
            console.log(response.data);

            const userInfo = response.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);

            if (userInfo) {
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            }
            if (userInfo && userInfo.token) {
                AsyncStorage.setItem('userToken', userInfo.token);
            }

            console.log('User Token: ' + userInfo.token);
            console.log('User Nome: ' + userInfo.usuario.nome);

        } catch (error) {
            setTimeout(() => setModalLoading(false), 1000);
            showErrorToast(error);
            console.log(`Login error: ${error}`)
            console.log(`Login error: ${setIsLoading}`)
        }
        setTimeout(() => setModalLoading(false), 1000);
    };

    const logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        try {
            await AsyncStorage.removeItem('userInfo');
            await AsyncStorage.removeItem('userToken');
        } catch (error) {
            setIsLoading(false);
            console.log(`Logout error: ${error}`);
        }
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        setIsLoading(true);
        try {
            const userInfoJson = await AsyncStorage.getItem('userInfo');
            const userToken = await AsyncStorage.getItem('userToken');

            if (userInfoJson) {
                const userInfo = JSON.parse(userInfoJson);
                setUserInfo(userInfo);
                setUserToken(userToken);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(`isLoggedIn error: ${error}`);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ register, login, logout, isLoading, userToken, userInfo, isAdmin }}>
            {children}
        </AuthContext.Provider>

    )
}
