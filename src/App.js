import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Detail from './Detail';

const App = StackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: 'Home',
  },
);

export default () => <App />;
