import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase.js'
import { email, password } from "./Modal/Modal.jsx";

export let state
export let userPhoto
export let userName
export let userEmail

auth.onAuthStateChanged(user => {
    if(user) {
        state = true
        userName = user.displayName
        userPhoto = user.photoURL
        userEmail = user.email
        //Delete This
        console.log('Login')
    }else {
        state = false
    }
})



export const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
}

export const CreateUserWithEmailAndPassword = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export const SignOut = () => {
    auth.signOut()
    //Delete this
    console.log('No Login')
}