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
