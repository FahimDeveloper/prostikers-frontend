export type TCategory = {
  _id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type TCategoryParams = {
  page: number;
  limit: number;
};
