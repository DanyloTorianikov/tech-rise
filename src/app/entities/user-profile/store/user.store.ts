import { ISelect } from "@modules/form-elements/select/interfaces/select.interface";

export interface IUserStore {
  userName: string;
  codeCountry: ISelect;
  phone: string;
  birthday: Date | null;
  country: string;
  avatar: string;
  roles?: string[];
  email: string;
}

export const INITIAL_USER_STORE: IUserStore = {
  userName: '',
  codeCountry: {
    value: '',
    label: ''
  },
  phone: '',
  birthday: null,
  country: '',
  avatar: '',
  roles: [],
  email: '',
};