export type IApiAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type IApiCompnay = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type IApiUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: IApiAddress;
  phone: string;
  website: string;
  company: IApiCompnay;
};

export type IParsedUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
};
