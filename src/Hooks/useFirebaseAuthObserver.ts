import { useEffect } from "react";
import useFirebase from "./useFirebase";
import { useAppDispatch } from "@/redux/app/store";
import { postUser, setLoading } from "@/redux/features/user/userSlice";
import { toast } from "react-toastify";
import { fetchSignInMethodsForEmail, getIdToken } from "firebase/auth";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";
const useFirebaseAuthObserver = () => {
  const { auth, signOut } = useFirebase();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser?.uid) {
        // get all data
        console.log(authUser);
        const { displayName, uid, email, emailVerified, photoURL, metadata } =
          authUser;
        const { createdAt, lastLoginAt } = metadata as {
          createdAt: string;
          lastLoginAt: string;
        };
        if (uid) {
          const photoURLValue = photoURL || undefined;
          getIdToken(authUser).then((value) => {
            setToLocalStorage(authKey, value);
            dispatch(
              postUser({
                uid,
                displayName,
                email,
                emailVerified,
                photoURL: photoURLValue,
                createdAt: new Date(Number(createdAt)),
                lastLoginAt: new Date(Number(lastLoginAt)),
              })
            )
              .then((res) => {
                console.log(res);
                if (res.type === "user/postUser/rejected") {
                  signOut();
                }
              })
              .catch((res) => {
                signOut();
              });
          });
        } else {
          signOut();
          dispatch(setLoading(false));
          toast.error(
            "Name or email not found try again with another account",
            { autoClose: 5000 }
          );
        }
      } else {
        dispatch(setLoading(false));
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return {};
};

export default useFirebaseAuthObserver;
