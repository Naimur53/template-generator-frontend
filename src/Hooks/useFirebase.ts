import { useEffect, useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  User,
  GoogleAuthProvider,
} from "firebase/auth";
import firebaseInit from "@/firebase/firebase.init";
const useFirebase = () => {
  firebaseInit();
  const [user, setUser] = useState<User | null>(null);
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
  }, [auth]);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    return auth.signOut();
  };

  return {
    user,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signOut,
  };
};
export default useFirebase;
