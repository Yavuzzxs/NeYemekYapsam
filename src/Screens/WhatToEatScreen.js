import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const WhatToEatScreen = ({ navigation }) => {
  const [seciliSebzeler, setSeciliSebzeler] = useState([]);         // Seçili sebzelerin listesi
  const [seciliEtler, setSeciliEtler] = useState([]);               // Seçili etlerin listesi
  const [seciliSütler, setSeciliSütler] = useState([]);             // Seçili sütlerin listesi
  const [seciliBaklagiller, setSeciliBaklagiller] = useState([]);   // Seçili baklagillerin listesi
  const [seciliMeyveler, setSeciliMeyveler] = useState([]);         // Seçili Meyvelerin listesi
  const [seciliKuruyemisler, setSeciliKuruyemisler] = useState([]); // Seçili Kuruyemislerin listesi
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);     // Seçili Malzemelerin listesi
  const [aramaMetni, setAramaMetni] = useState('');                 // Arama metni

  const handleSend = () => {
    navigation.navigate('ListeScreen'); // ListeScreen ekranına yönlendirme yapar.
  };


  const sebzeSec = (sebze) => {
    const index = seciliSebzeler.indexOf(sebze.ad);
    if (index === -1) {
      setSeciliSebzeler([...seciliSebzeler, sebze.ad]);
    } else {
      const yeniSeciliSebzeler = [...seciliSebzeler];
      yeniSeciliSebzeler.splice(index, 1);
      setSeciliSebzeler(yeniSeciliSebzeler);
    }
  };
  const etSec = (et) => {
    const index = seciliEtler.indexOf(et.ad);

    if (index === -1) {
      setSeciliEtler([...seciliEtler, et.ad]);
    } else {
      const yeniSeciliEtler = [...seciliEtler];
      yeniSeciliEtler.splice(index, 1);
      setSeciliEtler(yeniSeciliEtler);
    }
  };
  const sütSec = (süt) => {
    const index = seciliSütler.indexOf(süt.ad);
    if (index === -1) {
      setSeciliSütler([...seciliSütler, süt.ad]);
    } else {
      const yeniSeciliSütler = [...seciliSütler];
      yeniSeciliSütler.splice(index, 1);
      setSeciliSütler(yeniSeciliSütler);
    }
  };
  const baklagilSec = (baklagil) => {
    const index = seciliBaklagiller.indexOf(baklagil.ad);
    if (index === -1) {
      setSeciliBaklagiller([...seciliBaklagiller, baklagil.ad]);
    } else {
      const yeniSeciliBaklagiller = [...seciliBaklagiller];
      yeniSeciliBaklagiller.splice(index, 1);
      setSeciliBaklagiller(yeniSeciliBaklagiller);
    }
  };
  const meyveSec = (meyve) => {
    const index = seciliMeyveler.indexOf(meyve.ad);
    if (index === -1) {
      setSeciliMeyveler([...seciliMeyveler, meyve.ad]);
    } else {
      const yeniSeciliMeyveler = [...seciliMeyveler];
      yeniSeciliMeyveler.splice(index, 1);
      setSeciliMeyveler(yeniSeciliMeyveler);
    }
  };
  const kuruyemisSec = (kuruyemis) => {
    const index = seciliKuruyemisler.indexOf(kuruyemis.ad);
    if (index === -1) {
      setSeciliKuruyemisler([...seciliKuruyemisler, kuruyemis.ad]);
    } else {
      const yeniSeciliKuruyemisler = [...seciliKuruyemisler];
      yeniSeciliKuruyemisler.splice(index, 1);
      setSeciliKuruyemisler(yeniSeciliKuruyemisler);
    }
  };
  const malzemeSec = (malzeme) => {
    const index = seciliMalzemeler.indexOf(malzeme.ad);
    if (index === -1) {
      setSeciliMalzemeler([...seciliMalzemeler, malzeme.ad]);
    } else {
      const yeniSeciliMalzemeler = [...seciliMalzemeler];
      yeniSeciliMalzemeler.splice(index, 1);
      setSeciliMalzemeler(yeniSeciliMalzemeler);
    }
  };
  const filtrelenmisSebzeler = Sebzeler.filter((sebze) =>
    sebze.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisEtler = Etler.filter((et) =>
    et.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisSütler = Sütler.filter((süt) =>
    süt.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisBaklagiller = Baklagiller.filter((baklagil) =>
    baklagil.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisMeyveler = Meyveler.filter((meyve) =>
    meyve.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisKuruyemisler = Kuruyemisler.filter((kuruyemis) =>
    kuruyemis.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  const filtrelenmisMalzemeler = Malzemeler.filter((malzeme) =>
    malzeme.ad.toLowerCase().includes(aramaMetni.toLowerCase())
  );
  return (
    <ImageBackground
      source={require('../image/background.jpg')}
      style={styles.backgroundImage}
    >
      <>
        <View style={[styles.search, { marginTop: StatusBar.currentHeight ,backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
          <Searchbar
            onChangeText={(text) => setAramaMetni(text)}
            value={aramaMetni}
          />
        </View>
        <ScrollView>
          <SafeAreaView style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            {filtrelenmisSebzeler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  SEBZELER
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisSebzeler.map((sebze) => (
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
            {filtrelenmisEtler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white'}}>
                  HAYVANSAL GIDALAR / ETLER
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisEtler.map((et) => (
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
            {filtrelenmisSütler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  SÜT ÜRÜNLERİ
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisSütler.map((süt) => (
                <TouchableOpacity
                  key={süt.ad}
                  onPress={() => sütSec(süt)}
                  style={[styles.button, seciliSütler.includes(süt.ad) && styles.buttonSecili]}
                >
                  <Text style={styles.buttonText}>
                    {süt.emoji} {süt.ad}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {filtrelenmisBaklagiller.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  BUĞDAY / BAKLAGİL
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisBaklagiller.map((baklagil) => (
                <TouchableOpacity
                  key={baklagil.ad}
                  onPress={() => baklagilSec(baklagil)}
                  style={[styles.button, seciliBaklagiller.includes(baklagil.ad) && styles.buttonSecili]}
                >
                  <Text style={styles.buttonText}>
                    {baklagil.emoji} {baklagil.ad}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {filtrelenmisMeyveler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  MEYVELER
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisMeyveler.map((meyve) => (
                <TouchableOpacity
                  key={meyve.ad}
                  onPress={() => meyveSec(meyve)}
                  style={[styles.button, seciliMeyveler.includes(meyve.ad) && styles.buttonSecili]}
                >
                  <Text style={styles.buttonText}>
                    {meyve.emoji} {meyve.ad}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {filtrelenmisKuruyemisler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  KURUYEMİŞLER
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisKuruyemisler.map((kuruyemis) => (
                <TouchableOpacity
                  key={kuruyemis.ad}
                  onPress={() => kuruyemisSec(kuruyemis)}
                  style={[styles.button, seciliKuruyemisler.includes(kuruyemis.ad) && styles.buttonSecili]}
                >
                  <Text style={styles.buttonText}>
                    {kuruyemis.emoji} {kuruyemis.ad}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {filtrelenmisMalzemeler.length > 0 && (
              <View style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 30,color:'white' }}>
                  MUTFAK MALZEMELERİ
                </Text>
              </View>
            )}
            <View style={styles.container}>
              {filtrelenmisMalzemeler.map((malzeme) => (
                <TouchableOpacity
                  key={malzeme.ad}
                  onPress={() => malzemeSec(malzeme)}
                  style={[styles.button, seciliMalzemeler.includes(malzeme.ad) && styles.buttonSecili]}
                >
                  <Text style={styles.buttonText}>
                    {malzeme.emoji} {malzeme.ad}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSend}
            >
              <Text style={styles.sendButtonText}>GÖNDER</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ScrollView>
        <ExpoStatusBar style="auto" />
      </>
    </ImageBackground>
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
  sendButton: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    width: '40%',
    marginLeft: '30%',
  },
  sendButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
});
const Sebzeler = [
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

const Etler = [
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

const Sütler = [
  { ad: 'Peynir', emoji: '🧀' },
  { ad: 'Süt', emoji: '🥛' },
  { ad: 'Krema', emoji: '🍦' },
  { ad: 'Yoğurt', emoji: '🫕' },
  { ad: 'Ricotta', emoji: '🧈' },
];

const Baklagiller = [
  { ad: 'Un', emoji: '🌾' },
  { ad: 'Pirinç', emoji: '🍚' },
  { ad: 'Ekmek', emoji: '🍞' },
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
const Meyveler = [
  { ad: 'Limon', emoji: '🍋' },
  { ad: 'Portakal', emoji: '🍊' },
  { ad: 'Siyah Zeytin', emoji: '🫒' },
  { ad: 'Elma', emoji: '🍏' },
  { ad: 'Avokado', emoji: '🥑' },
  { ad: 'Yeşil Elma', emoji: '🍏' },
  { ad: 'Çilek', emoji: '🍓' },
  { ad: 'Nar', emoji: '🍅' },
  { ad: 'Üzüm', emoji: '🍇' },
  { ad: 'Frambuaz', emoji: '🍇🍇' },
  { ad: 'Böğürtlen', emoji: '🍇' },
  { ad: 'Ayva', emoji: '🍐' },
  { ad: 'İncir', emoji: '🫒' },
  { ad: 'Karadut', emoji: '🍇' },
  { ad: 'Kivi', emoji: '🥝' },
];

const Kuruyemisler = [
  { ad: 'Ceviz İçi', emoji: '🌰' },
  { ad: 'Dolmalık Fıstık(Çam)', emoji: '🌰' },
  { ad: 'Badem', emoji: '🌰' },
  { ad: 'Fındık', emoji: '🌰' },
  { ad: 'Antep Fıstığı', emoji: '🌰' },
  { ad: 'Kurutulmuş Domates', emoji: '🍅' },
  { ad: 'Kuru Kayısı', emoji: '🍑' },
  { ad: 'Hindistan Cevizi', emoji: '🥥' },
];

const Malzemeler = [
  { ad: 'Yağlı Kağıt', emoji: '📄' },
];
export default WhatToEatScreen;