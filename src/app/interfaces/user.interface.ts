import { ISelect } from "@modules/form-elements/select/interfaces/select.interface";

export interface IUser {
  userName: string;
  email: string;
  codeCountry: ISelect;
  phone: string;
  birthday: Date;
  country: string;
  avatar: string;
  password?: string;
}