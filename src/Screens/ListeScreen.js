import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListeScreen = ({ tarifler }) => {
  const renderTarif = ({ item }) => (
    <View style={styles.tarif}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.yaz}>
        LİSTE
      </Text>
      <View style={styles.container}>
        <FlatList
          data={tarifler}
          renderItem={renderTarif}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tarif: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  yaz:{
    marginTop:30,
    marginLeft:15,
    padding:16,
  },
});

export default ListeScreen;