/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login {
  __typename: "LoginResponse";
  loginName: string;
  token: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  input: LoginUser;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface LoginUser {
  loginName: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
