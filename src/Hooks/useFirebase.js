
  import { useEffect, useState } from "react";
  import { 
    signInWithPopup,
     
    signInWithEmailAndPassword 
 createUserWithEmailAndPassword,

    getAuth,
  } from "firebase/auth";
  import firebaseInit from "../firebase/firebase.init";
  const useFirebaseAuth = () => {
    firebaseInit();
    const [user, setUser] = useState(null); 
    const auth = getAuth();
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    
      const signInWithEmailAndPassword = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error signing in with email/password:", error);
        }
      };
      const signUpWithEmailAndPassword = async (email, password) => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error signing up with email/password:", error);
        }
      };
      

   
     
    const signOut = () => {
      return auth.signOut();
    };
  
    return {
      user, 
      signInWithEmailAndPassword 
 signUpWithEmailAndPassword,

      signOut,
    };
  };
  
  export default useFirebaseAuth;
  