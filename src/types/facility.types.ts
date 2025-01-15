import { IUser } from "./user.types";

export interface IFacilitySchedule {
  _id: string;
  facility_name: string;
  sport: string;
  facility: string;
  duration: number;
  description: string;
  price: number;
  ini_price: number;
  lanes: [string];
  schedules: Array<IFacilityDaySchedule>;
}

export interface IFacilityDaySchedule {
  day: string;
  active: boolean;
  start_time: string;
  end_time: string;
}

export interface IFacilityReservation {
  user: IUser;
  email: string;
  facility: IFacilitySchedule;
  sport: string;
  bookings: IFacilityBookings[];
  addons: IAddon[];
}

export interface IAddon {
  name: string;
  hours: number;
  image: string;
  price: number;
  ini_price: number;
}

export interface IFacilityBookings {
  date: string;
  time_slot: string;
  training: string;
}
