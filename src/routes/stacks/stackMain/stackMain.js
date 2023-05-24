import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlayerVideo from '../../../screens/SetScreens/VideoScreen'
import Search from '../../../screens/SetScreens/Search'
import Faq from '../../../screens/SetScreens/Faq';
import Services from '../../../screens/UserScreens/Services';
import Category from '../../../screens/UserScreens/Category';
import TabBottomRoutes from '../../bottom_tab/bottomtab';
import CatSelect from '../../../screens/UserScreens/CatSelect';
import ResetPassword from '../../../screens/SetScreens/ResetPassword';
import SplashLoading from '../../../components/loadingSplash';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Stack({ }) {
  return (
    <Navigator initialRouteName='TabBot' screenOptions={{ headerShown: false }}>
      <Screen name="TabBot" component={TabBottomRoutes} />
      <Screen name="Search" component={Search} />
      <Screen name="SplashLoading" component={SplashLoading} />
      <Screen name="Services" component={Services} />
      <Screen name="Category" component={Category} />
      <Screen name="Video" component={PlayerVideo} options={{animation:"none"}} />
      <Screen name="Faq" component={Faq} />
      <Screen name="CatSelect" component={CatSelect} />
      <Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}

      />
    </Navigator>
  );
}