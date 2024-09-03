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
