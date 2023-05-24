import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdmTabBottomRoutes from '../../AdmBottomTab/admBottomTab';
import AddPlaylist from '../../../screens/AdmScreens/AddPlaylist';
import EditPlaylist from '../../../screens/AdmScreens/EditPlaylist';
import AddVideo from '../../../screens/AdmScreens/AddVideo';
import EditVideo from '../../../screens/AdmScreens/EditVideo';

import PlayerVideo from '../../../screens/SetScreens/VideoScreen'
import Search from '../../../screens/SetScreens/Search'
import Faq from '../../../screens/SetScreens/Faq';
import Services from '../../../screens/UserScreens/Services';
import Category from '../../../screens/UserScreens/Category';
import CatSelect from '../../../screens/UserScreens/CatSelect';
import ResetPassword from '../../../screens/SetScreens/ResetPassword';
import SplashLoading from '../../../components/loadingSplash';


const Stack = createNativeStackNavigator();

const AdminStack = () => {
    return (
        <Stack.Navigator initialRouteName="AdmTabBottomRoutes" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AdmTabBottomRoutes" component={AdmTabBottomRoutes} />
            <Stack.Screen name="AddPlaylist" component={AddPlaylist} />
            <Stack.Screen name="EditPlaylist" component={EditPlaylist} />
            <Stack.Screen name="AddVideo" component={AddVideo} />
            <Stack.Screen name="EditVideo" component={EditVideo} />
            <Stack.Screen name="SplashLoading" component={SplashLoading} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Video" component={PlayerVideo} />
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="CatSelect" component={CatSelect} />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    title: '',
                }}

            />




        </Stack.Navigator>
    );
};

export default AdminStack;