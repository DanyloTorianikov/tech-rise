import { ISelect } from "@modules/form-elements/select/interfaces/select.interface";

export interface IUser extends ILoginUser {
  userName: string;
  codeCountry: ISelect;
  phone: string;
  birthday: Date;
  country: string;
  avatar: string;
  roles?: string[]
}

export interface ILoginUser {
  email: string;
  password?: string;
}

export interface IFullUserInfo extends IUser {
  banReason: boolean;
  banned: boolean;
  id: number;
}