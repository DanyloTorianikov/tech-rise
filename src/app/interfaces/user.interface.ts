import { ISelect } from "@modules/form-elements/select/interfaces/select.interface";

export interface IUser {
  userName: string;
  email: string;
  codeCountry: ISelect;
  phone: string;
  birthDate: Date;
  country: string;
  webSite: string;
  userPhoto: string;
}