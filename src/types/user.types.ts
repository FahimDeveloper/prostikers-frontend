export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  image: string;
  gender?: string;
  email: string;
  role: "user";
  phone?: string;
  provider: string;
  street_address?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  country?: string;
  date_of_birth?: string;
  membership?: boolean;
  status?: boolean;
  issue_date?: string | Date;
  expiry_date?: string | Date;
  package_name?: string;
  plan?: string;
  verified: boolean;
  credit_balance?: {
    machine_credit: string;
    session_credit: string;
  };
}
