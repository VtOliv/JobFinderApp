import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../components/Pages/Login';
import Details from '../components/Pages/Details';
import { Feather } from '@expo/vector-icons';
import { SignInRoutes } from '../Routes/signIn.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false , tabBarStyle: {backgroundColor: '#eb5e28', color: 'black'} }}>
        <Screen
          name="Login"
          component={SignInRoutes}
          options={{
            tabBarIcon: () => {
              return <Feather name="home" size={25} color="black" />;
            },
          }}
        />

        <Screen
          name="Details"
          component={Details}
          options={{
            tabBarIcon: () => {
              return <Feather name="search" size={25} color="black" />;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
