export type IncomingQueryType<T> = {
  message: string;
  count?: number;
  results: T[];
  summary?: any;
};

export type IncomingSingleQueryType<T> = {
  message: string;
  results: T;
};
