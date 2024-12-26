export type IncomingQueryType<T> = {
  message: string;
  count?: number;
  results: T[];
};

export type IncomingSingleQueryType<T> = {
  message: string;
  results: T;
};
