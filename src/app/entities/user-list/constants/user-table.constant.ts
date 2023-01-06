import { TABLE_PAGINATION } from "@constants/pagination.constant";
import { EOrder } from "@enums/order.enum";
import { IPaginationParams } from "@interfaces/pagination.interface";
import { EUserListSort } from "../enums/user-list-sort.enum";

export const DISPLAYED_COLUMNS = ['id', 'avatar', 'email', 'userName', 'birthday', 'phone', 'country', 'roles', 'banned', 'banReason', 'actions'];

export const DEFAULT_PAGINATION_CONFIG: IPaginationParams<EUserListSort> = {
  order: EOrder.DESC,
  sortBy: EUserListSort.id,
  page: 1,
  take: TABLE_PAGINATION.itemsPerPage,
  search: ''
};