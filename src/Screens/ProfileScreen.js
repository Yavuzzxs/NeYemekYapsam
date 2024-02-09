import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


import { firebaseConfig } from '../../config'; // Firebase yapılandırma bilgilerini içe aktarın
import UserProfile from './UserProfile';


const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı oturum durumu

  // Kullanıcının daha önce oturum açıp açmadığını kontrol etmek için bir etkileşim ekleyelim
  useEffect(() => {
    // Firebase'e yapılandırma bilgileri ile bağlanın
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Kullanıcı oturum açmışsa otomatik olarak UserProfile sayfasına yönlendirin
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        navigation.navigate('UserProfile');
      }
    });

    // Komponent kaldırıldığında etkileşimi temizleyin
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      // Firebase Authentication kullanarak e-posta ve şifre ile oturum açma işlemi
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Oturum açma başarılıysa kullanıcıyı oturum açmış olarak işaretleyin
        setIsLoggedIn(true);
        // Kullanıcıyı UserProfile sayfasına yönlendirin
        navigation.navigate('UserProfile');
      }
    } catch (error) {
      // Oturum açma sırasında hata oluşursa burada işleyebilirsiniz
      console.error('Oturum açma hatası:', error);
    }
  };

  return (
    <ImageBackground
      source={require('./../image/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>🚀 Hoş Geldiniz!</Text>
        {isLoggedIn ? (
          <UserProfile />
        ) : (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="E-posta"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <Text style={styles.emoji}>✉️</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <Text style={styles.emoji}>🔒</Text>
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.signUpButtonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heading: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  emoji: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  forgotPassword: {
    marginTop: '5%',
    marginLeft: '27%',
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginLeft:'30%',
    marginTop: 25,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 15,
    width: '50%',
  },
  signUpButton: {
    marginLeft:'30%',
    marginTop: '5%',
    backgroundColor: 'firebrick',
    padding: 15,
    borderRadius: 15,
    width: '50%',
},
signUpButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
},
});

export default ProfileScreen;