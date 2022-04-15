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
      headerStyle: {backgroundColor: '#163D5D'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold', color:"white"},
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
              style={[{color: 'white', paddingRight:5}]}
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
              style={[{color: 'white', paddingRight:5}]}
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
      headerStyle: {backgroundColor: '#163D5D'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold', color:"white"},
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
              style={[{color: 'white', paddingRight:5}]}
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
              style={[{color: 'white', paddingRight:5}]}
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
    initialRouteName="Interview questions"
    screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: '#163D5D'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold', color:"white"},
      headerBackTitle: 'back',
    }}>
    <Stack.Screen
      name="Interview questions"
      component={QAList}
      options={() => ({
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={25}
              style={[{color: 'white', paddingRight:5}]}
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
              style={[{color: 'white', paddingRight:5}]}
              onPress={() => navigation.navigate('Interview questions')}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export {TutorialStack, CommandStack, QAStack};
