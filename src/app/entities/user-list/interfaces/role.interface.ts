export interface IRole {
  value: string;
  description: string;
}

export interface IUpdateRole {
  roles: string[];
  userId: number;
}