import { useEffect, useState } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  User,
  GoogleAuthProvider,
  getIdToken,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseInit from "@/firebase/firebase.init";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
import { removeUser, setLoading } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/app/store";
import handleFirebaseAuthError from "@/helper/Error/firebaseError";
const useFirebase = () => {
  firebaseInit();
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        handleFirebaseAuthError(error);
      });
  };
  const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        handleFirebaseAuthError(error);
      });
  };
  const signInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        handleFirebaseAuthError(error);
      });
  };

  const signOut = () => {
    dispatch(removeUser());
    setToLocalStorage(authKey, "");
    return auth.signOut();
  };

  return {
    user,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signOut,
    auth,
  };
};
export default useFirebase;
