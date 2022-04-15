import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from './styles';

const QATopic = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{item.question}</Text>
      {item.answer.map((element, index) => (
        <View style={Styles.itemContainer} key={(index*10)}>
          <Text style={Styles.itemSubTitle}>
            {element}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default QATopic;
