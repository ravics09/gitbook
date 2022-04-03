import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import {
  Topic,
  Tutorials,
  QAList,
  QATopic,
  Commands,
  Command,
} from './../screens';

const Stack = createNativeStackNavigator();

const TutorialStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Tutorials"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Tutorials"
      component={Tutorials}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Gitbook')}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Topic"
      component={Topic}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Tutorials')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const CommandStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="Commands"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Commands"
      component={Commands}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Gitbook')}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Command"
      component={Command}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Commands')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const QAStack = ({navigation}) => (
  <Stack.Navigator
    initialRouteName="QAList"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold'},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="QAList"
      component={QAList}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('Gitbook')}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="QATopic"
      component={QATopic}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'black'}]}
              onPress={() => navigation.navigate('QAList')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export {TutorialStack, CommandStack, QAStack};
