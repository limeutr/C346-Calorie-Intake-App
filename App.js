import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Summary from './Summary';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator id = "Mainstack" >
          <Stack.Screen name="Home" component={Home} options={{ title: 'Calorie Tracker' }} />
          <Stack.Screen name="Summary" component={Summary} options={{ title: 'Summary' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
