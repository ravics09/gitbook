import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

import Styles from './styles';

const listData = [
  {
    key: '1',
    code: 'tutorials',
    title: 'Git Tutorial',
    subtitle: 'Covered all important topics',
  },
  {
    key: '2',
    code: 'commands',
    title: 'Git Commands',
    subtitle: 'Git commands for quick reference',
  },

  {
    key: '3',
    code: 'qalist',
    title: 'Interview Questions',
    subtitle: 'Github interview question and answers',
  },
];

// const RenderItem = props => {
//   const {key, item} = props;
//   return (
//     <View style={Styles.itemContainer} key={props.key}>
//       <Text style={Styles.itemTitle}>
//         {props.item.title}
//       </Text>
//       <Text style={Styles.itemSubTitle}>
//         {props.item.subtitle}
//       </Text>
//     </View>
//   );
// };

const Home = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Gitbook Content</Text>
      {/* {listData.map((item, key) => (
        <RenderItem key={key} item={item} />
      ))} */}
      {listData.map((item, index) => (
        <TouchableOpacity style={Styles.itemContainer} key={index} onPress={()=>navigation.navigate(item.code)}>
          <View>
            <Text style={Styles.itemTitle}>{item.title}</Text>
            <Text style={Styles.itemSubTitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
