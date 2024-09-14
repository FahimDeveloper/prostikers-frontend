export interface IFacilitySchedule {
  _id: string;
  facility_name: string;
  sport: string;
  facility: string;
  duration: number;
  description: string;
  price: number;
  lane: string;
  schedules: Array<IFacilityDaySchedule>;
}

export interface IFacilityDaySchedule {
  day: string;
  active: boolean;
  start_time: string;
  end_time: string;
}

export interface IFacilityReservation {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  facility: IFacilitySchedule;
  street_address: string;
  city: string;
  state: string;
  sport: string;
  zip_code: string;
  bookings: IFacilityBookings[];
}

export interface IFacilityBookings {
  date: string;
  time_slot: string;
  training: string;
}
