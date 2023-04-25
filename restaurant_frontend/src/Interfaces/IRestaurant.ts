import IBase from './IBase';
export default interface IRestaurant extends IBase {
  name: string;
  address: {
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    longitude: number;
    latitude: number;
  };
  opening_hours: {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
  };
}
