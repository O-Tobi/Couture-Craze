
import { initializeApp } from 'firebase/app';
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
    } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxVkJ06-XZND4JS1mDimRVybkcPIWSC2c",
    authDomain: "couturecraze-db.firebaseapp.com",
    projectId: "couturecraze-db",
    storageBucket: "couturecraze-db.appspot.com",
    messagingSenderId: "1004837894408",
    appId: "1:1004837894408:web:98f728871aa1eba59f54bd"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation= {}
    ) => {
    if(!userAuth) return;

    
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        };
        return userDocRef;
      };
    
    };
    
  