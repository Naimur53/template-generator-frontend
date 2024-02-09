import { useEffect } from "react";
import useFirebase from "./useFirebase";
import { useAppDispatch } from "@/redux/app/store";
import { postUser, setLoading } from "@/redux/features/user/userSlice";
import { toast } from "react-toastify";
import { User, fetchSignInMethodsForEmail, getIdToken } from "firebase/auth";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storageKey";

const useFirebaseAuthObserver = () => {
  const { auth, signOut } = useFirebase();
  const dispatch = useAppDispatch();

  const getTokensAfterSomeTime = (authUser: User | null) => {
    setInterval(() => {
      if (authUser) {
        getIdToken(authUser)
          .then((token) => {
            setToLocalStorage(authKey, token);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }, 1000 * 60 * 4);
  };

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
          getIdToken(authUser).then((value) => {
            setToLocalStorage(authKey, value);
            dispatch(
              postUser({
                uid,
                displayName,
                email: email || undefined,
                emailVerified,
                photoURL: photoURL || undefined,
                createdAt: new Date(Number(createdAt)),
                lastLoginAt: new Date(Number(lastLoginAt)),
              })
            )
              .then((res: { type: string }) => {
                if (res.type === "user/postUser/rejected") {
                  toast.error("Login unsuccessfully!");
                  signOut();
                  return;
                }
                getTokensAfterSomeTime(authUser);
              })
              .catch(() => {
                toast.error("Login unsuccessfully!");
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
