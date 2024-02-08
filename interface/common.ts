import { AnimationProps } from "framer-motion";

export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IUser = {
  //   your type
  _id: string;
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  isBlocked: boolean;
  createdAt: Date;
  lastLoginAt: Date;
};
export type INpmPackage = {
  name: string;
  version: string;
  addToDevDependencies?: boolean;
};
export type IWrap = {
  wrapperNameFirst?: string | undefined;
  wrapperNameLast?: string | undefined;
  importFrom: string;
};

export enum ICssFrameworks {
  MaterialUi = "Material Ui",
  Tailwind = "Tailwind",
  Bootstrap = "Bootstrap",
  ChakraUi = "Chakra Ui",
  AntDesign = "Ant Design",
}

export type IContent = {
  fileName: string;
  content: string;
  filePath?: string;
};
export enum IFileType {
  Folder = "folder",
  File = "file",
}
export interface IFileStructure {
  name: string;
  type: IFileType.File | IFileType.Folder;
  Input?: React.ReactNode;
  totalChildCount?: number;
  previousSiblingCount?: number;
  children?: IFileStructure[];
  language?: "js" | "ts";
}

export type TSingleBackground = {
  initial: AnimationProps["initial"];
  animate: AnimationProps["animate"];
  exit?: AnimationProps["exit"];
  className?: string;
  imgUrl: string;
  imgClassName?: string;
  activeUrls: string[];
};
