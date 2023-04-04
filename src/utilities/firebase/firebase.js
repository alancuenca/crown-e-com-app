import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCBY0-agxyy0Ha-pKD3IMWyEpqDTcOlzA",
    authDomain: "crown-shop-db-652de.firebaseapp.com",
    projectId: "crown-shop-db-652de",
    storageBucket: "crown-shop-db-652de.appspot.com",
    messagingSenderId: "234360731704",
    appId: "1:234360731704:web:4c77f297fe91b47cde0ecd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {
            await updateProfile(userAuth, { displayName });

            await setDoc(userDocRef, {
                displayName: userAuth.displayName || additionalInformation.displayName,
                email,
                createdAt,
                ...additionalInformation
            });

        } catch (error) {
            console.log('error creating user', error.message);
        }

        return userDocRef;
    }
};

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
    if (!email || !password) return;

    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    if (displayName) {
        await updateProfile(user, { displayName });
    };

    return user
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {

    onAuthStateChanged(auth, callback)
};