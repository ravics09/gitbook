import React from 'react';
import {View, Text, useColorScheme, SafeAreaView} from 'react-native';
import { Provider as PaperProvider} from 'react-native-paper';

import { darkTheme, lightTheme} from './src/utils/theme';
import AppNavigation from './src/navigation';

const App = () => {
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaView style={{flex:1}}>
        <AppNavigation/>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
