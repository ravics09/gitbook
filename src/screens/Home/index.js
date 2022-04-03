import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';

import Styles from './styles';

const listData = [
  {
    key: '1',
    code:'',
    title: 'Git Tutorial',
    subtitle: 'Covered all important topics',
  },
  {
    key: '2',
    title: 'Git Commands',
    subtitle: 'Git commands for quick reference',
  },

  {
    key: '3',
    title: 'Interview Questions',
    subtitle: 'Github interview question and answers',
  },
];
const RenderItem = props => {
  const {key, item} = props;
  return (
    <View style={Styles.itemContainer}>
      <Text style={Styles.itemTitle} key={props.key}>
        {props.item.title}
      </Text>
      <Text style={Styles.itemSubTitle} key={props.key}>
        {props.item.subtitle}
      </Text>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Gitbook Content</Text>
      {listData.map((item, key) => (
        <RenderItem key={key} item={item} />
      ))}
    </View>
  );
};

export default Home;
