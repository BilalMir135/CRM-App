import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './src/navigations';
import {store} from './src/state';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
