export type TCategory = {
  _id: string;
  name: string;
  image?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type TCategoryParams = {
  page: number;
  limit: number;
};
