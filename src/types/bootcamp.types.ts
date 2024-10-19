export interface IBootcamp {
  _id: string;
  course_name: string;
  sport: string;
  trainer: {
    _id: string;
    first_name: string;
    last_name: string;
  };
  capacity: number;
  enrolled: number;
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

export interface IBootcampReservation {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  course: IBootcamp;
  street_address: string;
  voucher_applied: boolean;
  city: string;
  state: string;
  sport: string;
  zip_code: string;
  trainer: {
    _id: string;
    first_name: string;
    last_name: string;
  };
}

export type IBootcampReservationParams = {
  email: string | undefined;
  limit: number | undefined;
  page: number | undefined;
  sport: string | undefined;
};
