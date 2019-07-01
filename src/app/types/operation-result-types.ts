

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_user_translation {
  firstName: string | null;
  lastName: string | null;
}

export interface login_login_user {
  email: string;
  role: Role;
  translation: login_login_user_translation[] | null;
}

export interface login_login {
  user: login_login_user;
  token: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  languageCode: LanguageCode;
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LanguageCode {
  EN = "EN",
  KA = "KA",
}

export enum Role {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
  EDITOR = "EDITOR",
}

//==============================================================
// END Enums and Input Objects
//==============================================================