import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';

import Stack from '../stacks/stackMain/stackMain';
import AdminStack from "../stacks/stackAdmin/stackAdmin";
import AuthStack from "../stacks/stackAuth/stackAuth";
import {AuthContext} from "../../context";
import Splash from "../../screens/SetScreens/SplashScreen";
import SplashLoading from "../../components/loadingSplash";
import { StatusBar } from 'react-native';
export default function AppNav() {
    const { isLoading, userToken, isAdmin } = useContext(AuthContext);

    if (isLoading) {
        return (
            
            <SplashLoading />
        
        )
    }

    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor={"#005B96"}/>
            {userToken !== null ? (isAdmin ? <AdminStack /> : <Stack />) : <AuthStack />}
        </NavigationContainer>
    )
}   