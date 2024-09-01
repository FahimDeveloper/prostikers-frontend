export interface IClass {
  _id: string;
  class_name: string;
  sport: string;
  description: string;
  facility: string;
  trainer: string;
  level: string;
  capacity: number;
  price: number;
  isDeleted: boolean;
  schedules: IClassDay[];
}

export interface IClassDay {
  day: string;
  active: boolean;
  start_time: string;
  end_time: string;
}
