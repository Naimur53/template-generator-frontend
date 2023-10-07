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
