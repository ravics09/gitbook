import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, Button} from 'react-native';

const Commands = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Commands Page</Text>
      <Button
        title="Go to Specific topic"
        onPress={() => navigation.navigate('Command')}
      />
    </View>
  );
};

export default Commands;
