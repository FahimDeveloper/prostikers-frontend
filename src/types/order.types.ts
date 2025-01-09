export type TOrder = {
  _id: string;
  email: string;
  order_id: string;
  product: {
    _id: string;
    name: string;
    thumbnail: string;
    category: string;
    brand: string;
  };
  quantity: number;
  color: string;
  size: string;
  total_price: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
  timeline: [TTimeline];
  user_name: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  phone: string;
  pickup_point: string;
};

export type TTimeline = {
  status: "pending" | "processing" | "shipped" | "delivered" | "canceled";
  note: string;
  date: string;
};

export type TOrderParams = {
  page: number;
  limit: number;
  status: string | undefined;
};
