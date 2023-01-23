import { TABLE_PAGINATION } from "@constants/pagination.constant";
import { EOrder } from "@enums/order.enum";
import { IFullUserInfo } from "@interfaces/user.interface";
import { EUserListSort } from "../enums/user-list-sort.enum";
import { IRole } from "../interfaces/role.interface";

export interface IUserListStore {
  data: IFullUserInfo[];
  roles: IRole[]
  total: number;
  currentPage: number;
  itemsPerPage: number;
  order: EOrder;
  sortBy: EUserListSort;
  page: number;
  take: number;
  search: string;
}

export const INITIAL_USER_LIST_STORE: IUserListStore = {
  data: [],
  roles: [],
  order: EOrder.DESC,
  sortBy: EUserListSort.id,
  page: 1,
  take: TABLE_PAGINATION.itemsPerPage,
  search: '',
  currentPage: 1,
  itemsPerPage: TABLE_PAGINATION.itemsPerPage,
  total: 0
};