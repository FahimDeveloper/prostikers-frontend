export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  image: string;
  gender?: string;
  email: string;
  password: string;
  role: "user";
  phone?: string;
  provider: string;
  verified: boolean;
  waiver_signed: boolean;
  general_membership: ICreditGeneral;
  academy_membership: ICreditAcademy;
  pass_pack?: {
    machine_credit: string;
    session_credit: string;
    issue_date: string;
    expiry_date: string;
  };
  street_address?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  country?: string;
  nationality?: string;
  date_of_birth?: string;
}

export interface ICreditGeneral {
  membership: boolean;
  status?: boolean;
  issue_date?: string;
  expiry_date?: string;
  package_name?: string;
  plan?: string;
  credit_balance?: {
    machine_credit: string;
    session_credit: string;
  };
  credit_date?: Date;
}

export interface ICreditAcademy {
  membership: boolean;
  status?: boolean;
  issue_date?: string;
  expiry_date?: string;
  package_name?: string;
  plan?: string;
  credit_balance?: {
    session_credit: string;
  };
  credit_date?: Date;
}
