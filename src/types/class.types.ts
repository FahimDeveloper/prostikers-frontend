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
  schedules: IClassDay[];
}

export interface IClassDay {
  day: string;
  active: boolean;
  start_time: string;
  end_time: string;
}

export interface IClassReservation {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  class: IClass;
  street_address: string;
  voucher_applied: boolean;
  city: string;
  state: string;
  sport: string;
  class_date: string;
  zip_code: string;
  trainer: {
    _id: string;
    first_name: string;
    last_name: string;
  };
}
