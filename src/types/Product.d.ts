export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  state: string;
  sold_quantity?: number;
  description?: string;
  category_id: string;
}

export interface Products {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Product {
  author: Author;
  item: Item;
}

export interface Category {
  id: string;
  name: string;
}

export interface ProductDescription {
  text: string;
  plain_text: string;
  last_updated: string;
  date_created: string;
  snapshot: Snapshot;
}

interface Snapshot {
  url: string;
  width: number;
  height: number;
  status: string;
}
