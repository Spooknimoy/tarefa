import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Tela1 from '../screens/tela1/Tela1';
import Tela2 from '../screens/tela2/Tela2';


const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tela 2">
        <Tab.Screen
          name="Tela 1"
          component={Tela1}
          options={{
            tabBarLabel: 'TELA 1',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="caret-back-outline" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Tela 2"
          component={Tela2}
          options={{
            tabBarLabel: 'TELA 2',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="caret-forward-outline" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;