import { EOrder } from "@enums/order.enum";

export interface IPaginationData<T> {
  data: T[];
  total: number;
  currentPage: number;
  itemsPerPage: number;
  order: EOrder;
}

export interface IPaginationParams<T> {
  page?: number;
  take?: number;
  search?: string;
  sortBy?: T;
  order?: EOrder;
}