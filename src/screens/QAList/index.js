import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import QAData from './../../utils/qalist.json';
import Styles from './styles';

const QAList = ({navigation}) => {

  const ItemRender = ({item, navigation}) => (
    <TouchableOpacity
      style={Styles.itemContainer}
      onPress={() => navigation.navigate('QATopic', {item: item})}>
      <View>
        <Text style={Styles.itemTitle}> {item.question} </Text>
      </View>
    </TouchableOpacity>
  );

  const header = () => {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#00B8D4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24, color: 'white'}}>
          {' '}
          JSON FlatList in React Native{' '}
        </Text>
      </View>
    );
  };

  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'black',
        }}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <FlatList
        data={QAData.questions}
        renderItem={({item}) => <ItemRender item={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default QAList;
