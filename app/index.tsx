import { useRouter } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { auth } from '../services/firebase';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario autenticado
        console.log('Usuario autenticado:', user.email);
        router.replace('/(tabs)');
      } else {
        // No autenticado
        console.log('No autenticado');
        router.replace('/(auth)/login');
      }
      setIsLoading(false);
    }, (error) => {
      console.error('Error en auth:', error);
      setIsLoading(false);
      router.replace('/(auth)/login');
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f9f9fb'
      }}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return null;
}