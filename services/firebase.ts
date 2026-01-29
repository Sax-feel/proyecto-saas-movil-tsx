import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth';
import { firebaseConfig } from '../firebase-config';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth, createUserWithEmailAndPassword, onAuthStateChanged,
    sendPasswordResetEmail, signInWithEmailAndPassword, signOut
};

    export type { User };
