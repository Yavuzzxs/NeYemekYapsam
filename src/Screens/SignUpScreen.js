import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { firebaseConfig } from '../../config'; // Firebase yapılandırma bilgilerini içe aktarın
import UserProfile from './UserProfile';
import auth from '@react-native-firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kullanıcı oturum durumu

  const handleSignUp = async () => {
    try {
      // Firebase'e yapılandırma bilgileri ile bağlanın
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      // Firebase Authentication kullanarak e-posta ve şifre ile kayıt olma işlemi
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Kayıt başarılıysa kullanıcıyı oturum açmış olarak işaretleyin
        setIsLoggedIn(true);
        // Kullanıcı adını Firebase veritabanına eklemek için burada gerekli işlemi yapabilirsiniz.
        // Örnek: firebase.database().ref('users/' + user.uid).set({ username });
        // Daha sonra kullanıcıyı UserProfile sayfasına yönlendirin.
        navigation.navigate('UserProfile');
      }
    } catch (error) {
      // Kayıt sırasında hata oluşursa burada işleyebilirsiniz.
      console.error('Kayıt hatası:', error);
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
                placeholder="Kullanıcı Adı"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <Text style={styles.emoji}>👤</Text>
            </View>
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
            <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Üye Ol</Text>
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
        fontSize: 24,
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
    signUpButton: {
        marginTop: '3%',
        backgroundColor: 'firebrick',
        padding: 15,
        borderRadius: 15,
            
    },
    signUpButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    goBackButton: {
        marginTop: 20,
    },
    goBackButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default SignUpScreen;