import React, { createContext, useContext, useMemo, useState } from 'react';
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
    setRestaurantOwner(response);
    // setRestaurant(response.restaurants);
    setLoading(false);
  };

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
    [restaurantOwner, restaurants, loading]
  );

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
