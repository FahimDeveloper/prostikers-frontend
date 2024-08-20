export interface IBootcamp {
  _id: string;
  course_name: string;
  sport: string;
  trainer: string;
  capacity: number;
  description: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  price: number;
}

export type IBootcampParams = {
  limit: number | undefined;
  trainer: string | undefined;
  sport: string | undefined;
};
