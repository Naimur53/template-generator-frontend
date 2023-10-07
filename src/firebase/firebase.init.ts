import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/firebase.config";

const firebaseInit = () => {
  const app = initializeApp(firebaseConfig);
  //  getAnalytics()
  return app;
};

export default firebaseInit;
