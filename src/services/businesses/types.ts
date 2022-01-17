export interface Business {
  id: string;
  name: string;
  description: string;
  phone: string;
  image: string;
  email: string;
  address: Address;
}

export interface Address {
  number: string;
  street: string;
  zip: string;
  city: string;
  country: string;
}

export interface NearBy {
  id: Business["id"];
  name: Business["name"];
  address: string;
}

export type Businesses = Array<Business>;

export type BusinessDetails = Omit<Business, "description"> &
  Record<"nearBy", Array<NearBy>>;
