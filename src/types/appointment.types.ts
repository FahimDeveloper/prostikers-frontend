import { IUser } from "./user.types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IAppointment = {
  _id: string;
  appointment_name: string;
  appointment_type: string;
  sport: string;
  duration: number;
  trainer: any;
  description: string;
  price: number;
  enrolled?: number;
  capacity?: number;
  schedules: IAppointmentDaySchedule[];
};

export type IAppointmentDetail = {
  _id: string;
  appointment_name: string;
  appointment_type: string;
  sport: string;
  duration: number;
  trainer: any;
  description: string;
  price: number;
  enrolled?: number;
  capacity?: number;
  schedules: IAppointmentDaySchedule;
};

type IAppointmentDaySchedule = {
  day: string;
  active: boolean;
  start_time: Date;
  end_time: Date;
};

export type IAppointmentParams = {
  trainer?: string | undefined;
  sport: string | undefined;
};

export interface IAppointmentGroupReservation {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  appointment: IAppointment;
  street_address: string;
  voucher_applied: boolean;
  city: string;
  state: string;
  sport: string;
  appointment_date: string;
  zip_code: string;
  trainer: {
    _id: string;
    first_name: string;
    last_name: string;
  };
}

export interface IAppointmentOneReservation {
  user: IUser;
  email: string;
  appointment: IAppointment;
  voucher_applied: boolean;
  sport: string;
  trainer: {
    _id: string;
    first_name: string;
    last_name: string;
  };
  bookings: IAppointmentBookings[];
}

export interface IAppointmentBookings {
  date: string;
  time_slot: string;
  training: string;
}
