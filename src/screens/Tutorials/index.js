import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, Button} from 'react-native';

const Tutorials = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tutorials Page</Text>
      <Button
        title="Go to Specific topic"
        onPress={() => navigation.navigate('Topic')}
      />
    </View>
  );
};

export default Tutorials;
