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
    color_name: string;
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
    color_name: string;
    color_code: string;
  };
  size: string;
  price: number;
  stock: number;
}

export interface IStoreProductsParams {
  limit: number;
  page: number;
}
