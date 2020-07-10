import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';



const config = {
    apiKey: "AIzaSyC0pnPglcS8meWoV0peN5Zx0rpc7T4lGzs",
   authDomain: "crwn-clothing-7c8f8.firebaseapp.com",
   databaseURL: "https://crwn-clothing-7c8f8.firebaseio.com",
    projectId: "crwn-clothing-7c8f8",
   storageBucket: "crwn-clothing-7c8f8.appspot.com",
   messagingSenderId: "519080841809",
   appId: "1:519080841809:web:fb90fb2af739ae242f1e70",
   measurementId: "G-FNRPNCJYS5"
  };
  
  export const createUserProfileDocument = async (userAuth , additionalData) =>{
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists) {
      const {displayName,email } =userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error){
        console.log('error creating user' ,error.message);
      }
    }
    return userRef;
  };
  
  
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore= firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;