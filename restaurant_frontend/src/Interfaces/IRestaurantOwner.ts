import IBase from './IBase';

export default interface IRestaurantOwner extends IBase {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
