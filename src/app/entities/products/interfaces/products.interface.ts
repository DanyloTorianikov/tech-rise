export interface IProduct extends IAddProduct {
  id: number;
}

export interface IAddProduct {
  title: string;
  content: string;
  price: number;
  image: string;
}