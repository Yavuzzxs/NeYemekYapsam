import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";


export default function HomeScreen() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.search}>
        <Searchbar/>
      </View>
      <View style={styles.list}>
      <Text>Ana Ekran</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"/>
    </>
  );
}
// marginTop: StatusBar.currentHeight
console.log(StatusBar.currentHeight)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor:"gray",
  },
  search: {
    padding: 15,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "gray",
  }
})