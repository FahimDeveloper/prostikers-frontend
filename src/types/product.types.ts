export type TProductResponse = {
  _id: string;
  name: string;
  short_description: string;
  details: string;
  thumbnail: string;
  gallery: string[];
  regular_price: number;
  offer_price: number;
  rating: number;
  price: number;
  color: {
    name: string;
    color_code: string;
  };
  size: string;
  stock: number;
  category:
    | "bats"
    | "gloves"
    | "soccer items"
    | "wearables"
    | "helmets"
    | "sports bags";
  brand: string;
  variations: IVariation[];
  createdAt: Date;
  updatedAt: Date;
};

export interface IVariation {
  color: {
    name: string;
    color_code: string;
  };
  size: string;
  price: number;
  stock: number;
}

export interface IProductsParams {
  limit: number;
  page: number;
}

export type TCart = {
  cart_id: string;
  id: string;
  name: string;
  thumbnail: string;
  price: number;
  color: {
    name: string;
    color_code: string;
  };
  size: string;
  quantity: number;
};

export type TProduct = {
  _id: string;
  name: string;
  short_description: string;
  thumbnail: string;
  regular_price: number;
  offer_price: number;
};
