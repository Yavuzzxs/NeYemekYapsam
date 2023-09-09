import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/Screens/HomeScreen";
import WhatToEatScreen from "./src/Screens/WhatToEatScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Ana Ekran" component={HomeScreen} />
        <Tab.Screen name="Ne Yesem" component={WhatToEatScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};