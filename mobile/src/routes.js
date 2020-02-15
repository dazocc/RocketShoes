/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import colors from './styles/colors';

import { navigationRef, isMountedRef } from './RootNavigation';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: navigation => <Header {...navigation} />,
          headerStyle: {
            backgroundColor: colors.dark,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
