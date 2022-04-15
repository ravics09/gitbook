import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Caption } from 'react-native-paper';
import Styles from './styles';

const Command = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.itemTitle}>{item.command}</Text>
      {item.detail.map((element, index) => (
        <Caption>{element}</Caption>
      ))}
    </View>
  );
};

export default Command;