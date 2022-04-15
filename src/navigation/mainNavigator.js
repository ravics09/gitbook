import React, {useState, useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './../screens';
import {
  TutorialStack,
  QAStack,
  CommandStack,
} from './../navigation/stackNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Gitbook"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#163D5D'},
          headerTintColor: 'White',
          headerTitleStyle: {fontWeight: 'bold', color:"white"},
          headerBackTitle: 'back',
        }}>
        <Stack.Screen
          name="Gitbook"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="tutorials"
          component={TutorialStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="commands"
          component={CommandStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="qalist"
          component={QAStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
