import React, { useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home';
import SettingsScreen from './Settings';
import MyCardsScreen from './MyCards'; 
import StatisticsScreen from './Statistics';

import HomeIcon from './images/home.png';
import SettingsIcon from './images/settings.png';
import MyCardsIcon from './images/myCards.png'; 
import StatisticsIcon from './images/statictics.png'; 

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? HomeIcon : HomeIcon;
            } else if (route.name === 'Settings') {
              iconName = focused ? SettingsIcon : SettingsIcon;
            } else if (route.name === 'MyCards') {
              iconName = focused ? MyCardsIcon : MyCardsIcon;
            } else if (route.name === 'Statistics') {
              iconName = focused ? StatisticsIcon : StatisticsIcon;
            }

            return <Image source={iconName} style={{ width: size, height: size }} />;
          },
          tabBarActiveTintColor: 'blue', 
          tabBarInactiveTintColor: 'gray', 
        })}
      >
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} isDarkTheme={isDarkTheme} />}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {(props) => <SettingsScreen {...props} isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />}
        </Tab.Screen>
        <Tab.Screen name="MyCards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
