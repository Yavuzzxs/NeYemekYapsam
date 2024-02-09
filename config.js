import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBUp7xAa4pB3rvrKWDalmLoTGAkdHS62zA",
  authDomain: "neyemekyapsam-16840.firebaseapp.com",
  projectId: "neyemekyapsam-16840",
  storageBucket: "neyemekyapsam-16840.appspot.com",
  messagingSenderId: "578750124832",
  appId: "1:578750124832:web:a47ccb6042469531e53d45",
  measurementId: "G-LYDEMR6K95"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Oturum kalıcılığını ayarla (örneğin, LOCAL olarak ayarla)
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Oturum kalıcılığı başarıyla ayarlandı
  })
  .catch((error) => {
    console.error('Oturum kalıcılığı ayarlanamadı:', error);
  });


