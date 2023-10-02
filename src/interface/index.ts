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
export interface ISingleNavItem {
  icon?: string;
  title: string;
  to?: string;
  subNav?: ISingleNavItem[];
}

export interface IFields {
  fieldName: string;
  type: any;
  length: number;
  isRequired: boolean;
  isUnique: boolean;
}
export interface IModule {
  name: string;
  fields: IFields[];
  shouldAddPaginationAndQuery: boolean;
  searchTermFields?: string[];
  exactTermFields?: string[];
}
