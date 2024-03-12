/**
 * Raise For Me App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from './src/misc/colors';
import RootNavigation from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AppModal from './src/components/modal/Modals';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.appBackground,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, styles.sorround]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootNavigation />
        <AppModal />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
  },
});

export default App;
