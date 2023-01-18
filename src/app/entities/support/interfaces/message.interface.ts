import { IUser } from "@interfaces/user.interface";

export interface IMessageFull extends IMessage {
  clientId: string;
}

export interface IMessages {
  [key: string]: IMessage[];
}

export interface IMessage {
  text: string;
  user: IUser;
}