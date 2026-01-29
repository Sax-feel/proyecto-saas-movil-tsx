import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../services/firebase';

export default function DashboardScreen() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth); // Usar signOut de firebase/auth
            Alert.alert('Éxito', 'Sesión cerrada correctamente');
            router.replace('/(auth)/login');
        } catch (error: any) {
            console.error('Error al cerrar sesión:', error);
            Alert.alert('Error', 'No se pudo cerrar sesión. Intente nuevamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Bienvenido a tu aplicación móvil</Text>

            <View style={styles.infoCard}>
                <Text style={styles.infoText}>
                    Usuario: {auth.currentUser?.email || 'Invitado'}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
                activeOpacity={0.8}
            >
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9fb',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
        marginBottom: 30,
    },
    infoCard: {
        backgroundColor: '#e0e7ff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 30,
        width: '100%',
    },
    infoText: {
        fontSize: 16,
        color: '#3730a3',
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#ef4444',
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#ef4444',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});