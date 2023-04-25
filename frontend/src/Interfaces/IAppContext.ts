import { Dispatch, SetStateAction } from 'react';
import IRestaurantOwner from './IRestaurantOwner';
import IRestaurant from './IRestaurant';

export default interface IAppContext {
  restaurantOwner: IRestaurantOwner | null;
  setRestaurantOwner: Dispatch<SetStateAction<IRestaurantOwner | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getRestaurantRequiredInfo: () => void;
  // also has restaurant associated to restaurant owner which is arrat of restaurants
  restaurants: IRestaurant[] | null;
  setRestaurant: Dispatch<SetStateAction<IRestaurant[] | null>>;
}
