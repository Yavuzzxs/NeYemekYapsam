import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const WhatToEatScreen = () => {
  const [seciliSebzeler, setSeciliSebzeler] = useState([]); // Seçili sebzelerin listesi
  const [seciliEtler, setSeciliEtler] = useState([]); // Seçili etlerin listesi
  const [seciliSütler, setSeciliSütler] = useState([]); // Seçili sütlerin listesi
  const [seciliBaklagiller, setSeciliBaklagiller] = useState([]); // Seçili baklagillerin listesi

  // Sebze seçimini işle
  const sebzeSec = (sebze) => {
    const index = seciliSebzeler.indexOf(sebze.ad);

    if (index === -1) {
      // Sebze seçilmemişse, seçili sebzeler listesine ekle
      setSeciliSebzeler([...seciliSebzeler, sebze.ad]);
    } else {
      // Sebze zaten seçiliyse, seçili sebzeler listesinden kaldır
      const yeniSeciliSebzeler = [...seciliSebzeler];
      yeniSeciliSebzeler.splice(index, 1);
      setSeciliSebzeler(yeniSeciliSebzeler);
    }
  };

    // Et seçimini işle
    const etSec = (et) => {
      const index = seciliEtler.indexOf(et.ad);
  
      if (index === -1) {
        // Et seçilmemişse, seçili Etler listesine ekle
        setSeciliEtler([...seciliEtler, et.ad]);
      } else {
        // Et zaten seçiliyse, seçili etler listesinden kaldır
        const yeniSeciliEtler = [...seciliEtler];
        yeniSeciliEtler.splice(index, 1);
        setSeciliEtler(yeniSeciliEtler);
      }
    };

    const sütSec = (süt) => {
      const index = seciliSütler.indexOf(süt.ad);
  
      if (index === -1) {
        // süt seçilmemişse, seçili süt listesine ekle
        setSeciliSütler([...seciliSütler, süt.ad]);
      } else {
        // Et zaten seçiliyse,  listesinden kaldır
        const yeniSeciliSütler = [...seciliSütler];
        yeniSeciliSütler.splice(index, 1);
        setSeciliSütler(yeniSeciliSütler);
      }
    };

    const baklagilSec = (baklagil) => {
      const index = seciliBaklagiller.indexOf(baklagil.ad);
  
      if (index === -1) {
        // baklagil seçilmemişse, seçili baklagil listesine ekle
        setSeciliBaklagiller([...seciliBaklagiller, baklagil.ad]);
      } else {
        // Et zaten seçiliyse,  listesinden kaldır
        const yeniSeciliBaklagiller = [...seciliBaklagiller];
        yeniSeciliBaklagiller.splice(index, 1);
        setSeciliBaklagiller(yeniSeciliBaklagiller);
      }
    };

  return (
    <>
      <View style={[styles.search, { marginTop: StatusBar.currentHeight, }]}>
        <Searchbar />
      </View>
      <ScrollView>
        <SafeAreaView>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              SEBZELER
            </Text>
          </View>
          <View style={styles.container}>
            {sebzeler.map((sebze) => (
              <TouchableOpacity
                key={sebze.ad}
                onPress={() => sebzeSec(sebze)}
                style={[styles.button, seciliSebzeler.includes(sebze.ad) && styles.buttonSecili]}
              >
                <Text style={styles.buttonText}>
                  {sebze.emoji} {sebze.ad}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginTop:15}}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              HAYVANSAL GIDALAR / ETLER
            </Text>
          </View>
          <View style={styles.container}>
            {etler.map((et) => (
              <TouchableOpacity
                key={et.ad}
                onPress={() => etSec(et)}
                style={[styles.button, seciliEtler.includes(et.ad) && styles.buttonSecili]}
              >
                <Text style={styles.buttonText}>
                  {et.emoji} {et.ad}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginTop:15}}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              Süt Ürünleri
            </Text>
          </View>
          <View style={styles.container}>
            {Sütler.map((süt) => (
              <TouchableOpacity
                key={süt.ad}
                onPress={() => etSec(süt)}
                style={[styles.button, seciliEtler.includes(süt.ad) && styles.buttonSecili]}
              >
                <Text style={styles.buttonText}>
                  {süt.emoji} {süt.ad}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginTop:15}}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              BUĞDAY / BAKLAGİL
            </Text>
          </View>
          <View style={styles.container}>
            {Baklagiller.map((baklagil) => (
              <TouchableOpacity
                key={baklagil.ad}
                onPress={() => etSec(baklagil)}
                style={[styles.button, seciliEtler.includes(baklagil.ad) && styles.buttonSecili]}
              >
                <Text style={styles.buttonText}>
                  {baklagil.emoji} {baklagil.ad}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  search: {

    padding: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  buttonSecili: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});



const sebzeler = [
  { ad: 'Kuru Soğan', emoji: '🧅' },
  { ad: 'Sarımsak', emoji: '🧄' },
  { ad: 'Maydanoz', emoji: '🌿' },
  { ad: 'Domates', emoji: '🍅' },
  { ad: 'Havuç', emoji: '🥕' },
  { ad: 'Patates', emoji: '🥔' },
  { ad: 'Pırasa', emoji: '🌿' },
  { ad: 'Dereotu', emoji: '🌱' },
  { ad: 'Taze Soğan', emoji: '🧅' },
  { ad: 'Biber', emoji: '🌶️' },
  { ad: 'Kabak', emoji: '🥒' },
  { ad: 'Patlıcan', emoji: '🍆' },
  { ad: 'Marul', emoji: '🥬' },
  { ad: 'Mantar', emoji: '🍄' },
  { ad: 'Taze Fesleğen', emoji: '🌿' },
  { ad: 'Beyaz Lahana', emoji: '🥬' },
  { ad: 'Pancar', emoji: '🥕' },
  { ad: 'Bezelye', emoji: '🌱' },
  { ad: 'Ispanak', emoji: '🍃' },
  { ad: 'Taze Nane', emoji: '🌱' },
  { ad: 'Brokoli', emoji: '🥦' },
  { ad: 'Kereviz', emoji: '🌿' },
  { ad: 'Taze Kekik', emoji: '🌿' },
  { ad: 'Salatalık', emoji: '🥒' },
  { ad: 'Dolmalık Biber', emoji: '🌶️' },
  { ad: 'Karnabahar', emoji: '🥦' },
  { ad: 'Taze Fasulye', emoji: '🌱' },
  { ad: 'Taze Biberiye', emoji: '🌱' },
  { ad: 'Kereviz Sapı', emoji: '🌿' },
  { ad: 'Bal Kabağı', emoji: '🎃' },
  { ad: 'Semizotu', emoji: '🌱' },
  { ad: 'Enginar', emoji: '🌱' },
  { ad: 'Roka', emoji: '🌱' },
  { ad: 'Taze Sarımsak', emoji: '🧄' },
  { ad: 'Bamya', emoji: '🌱' },
  { ad: 'Pazı', emoji: '🌿' },
];

const etler =[
  { ad: 'Yumurta', emoji: '🥚' },
  { ad: 'Kıyma', emoji: '🥩' },
  { ad: 'Tavuk Eti', emoji: '🍗' },
  { ad: 'Kuşbaşı Et', emoji: '🥩' },
  { ad: 'Balık', emoji: '🐟' },
  { ad: 'Kuzu Eti', emoji: '🐑' },
  { ad: 'Hindi Eti', emoji: '🦃' },
  { ad: 'Dana Eti', emoji: '🐄' },
  { ad: 'Sucuk', emoji: '🍖' },
  { ad: 'Sosis', emoji: '🌭' },
  { ad: 'Kalamar', emoji: '🦑' },
  { ad: 'Pastırma', emoji: '🥓' },
  { ad: 'Palamut', emoji: '🐟' },
  { ad: 'Tavuk Baget', emoji: '🍗' },
  { ad: 'Karides', emoji: '🦐' },
];

const Sütler =[
  { ad: 'Peynir', emoji: '🧀' },
  { ad: 'Süt', emoji: '🥛' },
  { ad: 'Krema', emoji: '🍦' },
  { ad: 'Yoğurt', emoji: '🫕' },
  { ad: 'Ricotta', emoji: '🧈' },
];

const Baklagiller =[
  { ad: 'Un', emoji: '🌾' },
  { ad: 'Pirinç', emoji: '🍞' },
  { ad: 'Ekmek', emoji: '🍦' },
  { ad: 'Bulgur', emoji: '🌾' },
  { ad: 'Nohut', emoji: '🌱' },
  
  { ad: 'Makarna', emoji: '🍝' },
  { ad: 'Galeta Unu', emoji: '🍪' },
  { ad: 'Kırık Pirinç', emoji: '🍚' },
  { ad: 'Yeşil Mercimek', emoji: '🟢' },
  { ad: 'Buğday', emoji: '🌾' },

  { ad: 'Mısır Unu', emoji: '🌽' },
  { ad: 'Kuru Fasulye', emoji: '🥫' },
  { ad: 'Yulaf Ezmesi', emoji: '🥣' },
  { ad: 'Yufka', emoji: '🥙' },
  { ad: 'Kırmızı Mercimek', emoji: '❤️' },

  { ad: 'Siyez Bulguru', emoji: '🌾' },
  { ad: 'Buğday Nişastası', emoji: '🌾' },
  { ad: 'İrmik', emoji: '🌾' },
  { ad: 'Ekmek Kırıntısı', emoji: '🍞' },
  { ad: 'Arpa Şehriye', emoji: '🌾' },

  { ad: 'Tel Şehriye', emoji: '🌾' },
  { ad: 'Erişte', emoji: '🍝' },
  { ad: 'Yulaf Unu', emoji: '🥣' },
  { ad: 'Kuru Bakla', emoji: '🥫' },
  { ad: 'Barbunya', emoji: '🥫' },

  { ad: 'Kuru Börülce', emoji: '🥫' },
  { ad: 'Kuskus', emoji: '🍲' },
];
export default WhatToEatScreen;