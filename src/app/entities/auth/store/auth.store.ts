export interface IAuthStore {
  token: string;
}

export const INITIAL_AUTH_STORE: IAuthStore = {
  token: '',
};