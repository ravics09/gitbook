import React, {useState, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Details} from './../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: 'black',
          headerTitleStyle: {fontWeight: 'bold'},
          headerBackTitle: 'back',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
