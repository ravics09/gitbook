import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, Button} from 'react-native';

const QAList = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>QAList Page</Text>
      <Button
        title="Go to Specific topic"
        onPress={() => navigation.navigate('QATopic')}
      />
    </View>
  );
};

export default QAList;
