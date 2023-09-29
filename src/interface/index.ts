export enum ITechnology {
  JavaScript = "js",
  Typescript = "ts",
}
export interface ICommonPackage {
  name: string;
  version: string;
  doc: string;
}

export interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
