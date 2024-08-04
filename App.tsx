/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from '@navigations';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}

export default App;
