/*
  My React Native Project
  Ana navigasyon yapısını içeren App.js dosyası.
*/



import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


// Ekran bileşenlerini içe aktarın
import HomeScreen from "./src/Screens/HomeScreen"; // Ana ekran bileşeni
import WhatToEatScreen from "./src/Screens/WhatToEatScreen"; // Ne Yesem ekran bileşeni
import ProfileScreen from "./src/Screens/ProfileScreen"; // Profil ekran bileşeni
import SignUpScreen from "./src/Screens/SignUpScreen"; // Kayıt ekran bileşeni
import ListeScreen from "./src/Screens/ListeScreen"; // Liste ekran bileşeni

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Stack Navigator'ı oluşturun


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Ana Ekran') {
              iconName = focused ? '🏠' : '🏠';
            } else if (route.name === 'Ne Yesem') {
              iconName = focused ? '🍽️' : '🍴';
            } else if (route.name === 'Profil') {
              iconName = focused ? '👤' : '👤';
            }

            return <Text style={{ fontSize: 25 }}>{iconName}</Text>;
          },
        })}
        tabBarActiveTintColor="tomato"
        tabBarInactiveTintColor="gray"
        tabBarStyle={{
          display: 'flex',
        }}
      >
        <Tab.Screen name="Ana Ekran" component={HomeScreen} />

        <Tab.Screen name="Ne Yesem">
          {() => (
            <Stack.Navigator initialRouteName="WhatToEat" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="WhatToEat" component={WhatToEatScreen} /> 
              <Stack.Screen name="ListeScreen" component={ListeScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>


        <Tab.Screen name="Profil">
          {() => (
            <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};