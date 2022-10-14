import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        { routes.map((route, index)=>{
          return <Tab.Screen key={index} name={route.name} component={route.component} />
        })}
      </Tab.Navigator>
    </NavigationContainer>
  ); 
};
