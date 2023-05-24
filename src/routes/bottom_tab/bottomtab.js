//Imports//
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//grid//
//Screens//
import Category from '../../screens/UserScreens/Category';
import Profile from '../../screens/UserScreens/Profile';
import Search from '../../screens/SetScreens/Search/index'
import Faq from '../../screens/SetScreens/Faq'

//Screens Names//
const category = 'Category';
const search = 'Search';
const profile = 'Profile';
const faq = 'Faq';

const Tab = createBottomTabNavigator();

export default function TabBottomRoutes({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={category}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#093D73' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === category) {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (rn === search) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (rn === faq) {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (rn === profile) {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabel: '',
      })}>
      <Tab.Screen
        name={category}
        component={Category}
      />
      <Tab.Screen
        name={search}
        component={Search}
      />
      <Tab.Screen
        name={faq}
        component={Faq}
      />
      <Tab.Screen
        name={profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
}