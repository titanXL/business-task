export interface Businesses {
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
