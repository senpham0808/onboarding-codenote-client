import {History} from 'history';

export interface PropsAuthen {
  isAuthenticated: boolean;
}

export interface PropsAuthenFunc {
  userHasAuthenticated: (boolean) => void
}

export interface State {}

export interface StateAuthen {
  isAuthenticated: boolean
}

export interface StateLoading {
  isLoading: boolean
}

export interface StateUser {
  email: string;
  password: string;
}

export interface StateAnyString {
  [keys: number]: string
}

export interface PropsHistory {
  history: History;
}

export interface StateContent {
  content: string;
}