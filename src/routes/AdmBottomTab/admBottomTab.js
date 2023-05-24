import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AdmServices from '../../screens/AdmScreens/AdmServices';
import Category from '../../screens/UserScreens/Category';
import Profile from '../../screens/UserScreens/Profile';
import Search from '../../screens/SetScreens/Search/index'
import Faq from '../../screens/SetScreens/Faq'

const Tab = createBottomTabNavigator();

const ROUTE_NAMES = {
  category: 'Category',
  search: 'Search',
  profile: 'Profile',
  faq: 'Faq',
  config: 'AdmServices'
}

export default function AdmTabBottomRoutes({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAMES.category}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FF6B00' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case ROUTE_NAMES.category:
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case ROUTE_NAMES.search:
              iconName = focused ? 'search' : 'search-outline';
              break;
            case ROUTE_NAMES.faq:
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case ROUTE_NAMES.profile:
              iconName = focused ? 'bookmark' : 'bookmark-outline';
              break;
            case ROUTE_NAMES.config:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabel: '',
      })}
    >
      <Tab.Screen name={ROUTE_NAMES.category} component={Category} />
      <Tab.Screen name={ROUTE_NAMES.search} component={Search} />
      <Tab.Screen name={ROUTE_NAMES.faq} component={Faq} />
      <Tab.Screen name={ROUTE_NAMES.profile} component={Profile} />
      <Tab.Screen name={ROUTE_NAMES.config} component={AdmServices} />
    </Tab.Navigator>
  );
}