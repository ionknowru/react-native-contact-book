import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';

import store from './src/redux/store';

import { HomeScreen, ContactScreen } from './src/screens';

const Stack = createStackNavigator();

// TODO ! Refactor fetching data from api | redux thunk

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <React.Fragment>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ HomeScreen }  />
            <Stack.Screen name="Contact" component={ ContactScreen } />
          </Stack.Navigator>
        </React.Fragment>
      </Provider>
    </NavigationContainer>
  );
}

export default App;