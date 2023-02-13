import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome, Finish} from "../screen";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Finish" component={Finish} />
  </Stack.Navigator>
);

export default Navigator;
