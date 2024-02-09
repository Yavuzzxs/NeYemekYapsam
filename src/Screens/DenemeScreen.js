import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // E-posta ve şifre bilgilerini kullanarak giriş işlemini burada gerçekleştirin.
    // Örneğin, bir API çağrısı veya giriş işlemini doğrulamak için uygun bir yöntem kullanabilirsiniz.
    // Giriş başarılıysa kullanıcıyı ana sayfaya yönlendirebilirsiniz.
  };

  const handleForgotPassword = () => {
    // Şifremi unuttum işlemini burada gerçekleştirin.
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen'); // SignUpScreen ekranına yönlendirme yapar.
  };

  return (
    <ImageBackground
      source={require('./../image/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>🚀 Hoş Geldiniz!</Text>
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
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPassword}>Şifremi unuttum</Text>
        </TouchableOpacity>
        {/* Üye Ol butonunu ekleyin */}
        <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Üye Ol</Text>
        </TouchableOpacity>
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
    marginTop: '1%',
    marginLeft: '35%',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    width: '40%',
  },
  signUpButton: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    width: '40%',
  },
  signUpButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfileScreen;