export type IEvent = {
  _id: string;
  event_name: string;
  event_type: string;
  sport: string;
  start_date: string;
  end_date: string;
  location: string;
  registration_start: string;
  registration_end: string;
  allowed_registrations: number;
  registration: number;
  description: string;
  image: string;
  price: number;
};

export type IEventParams = {
  limit: number | undefined;
  event_type?: string | undefined;
  sport?: string | undefined;
};

export type IEventReservationParams = {
  email: string | undefined;
  limit: number | undefined;
  page: number | undefined;
  sport: string | undefined;
};

export type IEventIndividualReservation = {
  irst_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  event: IEvent;
  street_address: string;
  city: string;
  state: string;
  sport: string;
  class_date: string;
  zip_code: string;
};

export interface IEventGroupMembers {
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  contact: string;
}

export type IEventTeamReservation = {
  irst_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: number;
  event: IEvent;
  street_address: string;
  voucher_applied: boolean;
  city: string;
  state: string;
  sport: string;
  class_date: string;
  zip_code: string;
  team_name: string;
  team: IEventGroupMembers[];
};
