import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from './styles';

const Command = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.itemTitle}>{item.command}</Text>
      {item.detail.map((element, index) => (
        <Text style={Styles.itemSubTitle} key={index}>
          {element}
        </Text>
      ))}
    </View>
  );
};

export default Command;