import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import IAppContext from '../Interfaces/IAppContext';
import { IRestaurant, IRestaurantOwner } from '../Interfaces';
import { AuthService } from '../services';

export const AppContext = createContext({} as IAppContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const AppProvider = (props: any) => {
  const [restaurantOwner, setRestaurantOwner] =
    useState<IRestaurantOwner | null>(null);
  const [restaurants, setRestaurant] = useState<IRestaurant[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getRestaurantRequiredInfo = async () => {
    setLoading(true);
    const response = await AuthService.getRestaurantOwner();
    // save this response to local storage
    localStorage.setItem('restaurantOwner', JSON.stringify(response));
    setRestaurantOwner(response);
    // setRestaurant(response.restaurants);
    setLoading(false);
  };
  // write useEffect to get restaurant owner info from local storage

  const value = useMemo(
    () => ({
      restaurantOwner,
      setRestaurantOwner,
      loading,
      setLoading,
      getRestaurantRequiredInfo,
      restaurants,
      setRestaurant,
    }),
    [restaurantOwner, loading, restaurants]
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
