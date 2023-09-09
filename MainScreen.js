import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/Screens/HomeScreen";
import { WhatToEatScreen } from "./src/Screens/WhatToEatScreen";
import { ProfileScreen } from "./src/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ana Ekran" component={HomeScreen} />
      <Tab.Screen name="Ne Yesem" component={WhatToEatScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}