import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Styles from './styles';
import CommandList from './../../utils/commands.json';

const Commands = ({navigation}) => {
  const ItemRender = ({item, navigation}) => (
    <TouchableOpacity
      style={Styles.itemContainer}
      onPress={() => navigation.navigate('Command', {item: item})}>
      <View>
        <Text style={Styles.itemTitle}> {item.command} </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Most Useful Commands</Text>
      <FlatList
        data={CommandList.commands}
        renderItem={({item}) => (
          <ItemRender item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Commands;
