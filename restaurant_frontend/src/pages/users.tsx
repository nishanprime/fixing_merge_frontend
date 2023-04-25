import React, { useContext, useEffect } from 'react';
import AdminLayout from './layouts/AdminLayout';
import { AppContext } from '@contexts/AppProvider';
import { AuthService } from '@services/index';
const Users = () => {
  const { getRestaurantRequiredInfo, restaurantOwner, restaurants } =
    useContext(AppContext);

  useEffect(() => {
    getRestaurantRequiredInfo();
  }, []);
  return (
    <AdminLayout title="Users">
      <button
        onClick={async () => {
          const response = await AuthService.login({
            email: 'bipulpoudeldev@gmail.com',
            password: 'Paramount@123',
          });
          console.log(response);
        }}
        className="text-white bg-blue-500 px-4 py-2 rounded-md"
      >
        Login (Click to login)
      </button>
      <h1>Logged in restaurant: {JSON.stringify(restaurantOwner)}</h1>
      <h1>Restaurants; {JSON.stringify(restaurants)}</h1>
    </AdminLayout>
  );
};

export default Users;
