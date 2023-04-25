import React, { useContext, useEffect } from 'react';
import AdminLayout from './layouts/AdminLayout';
import { AppContext } from '@contexts/AppProvider';
import { AuthService } from '@services/index';
const Test = () => {
  const { getRestaurantRequiredInfo, restaurantOwner, loading } =
    useContext(AppContext);

  useEffect(() => {
    getRestaurantRequiredInfo();
  }, []);
  return (
    <AdminLayout title="TestPage">
      <div>Test</div>
      <button
        onClick={async () => {
          const response = await AuthService.login({
            email: 'bipulpoudeldev@gmail.com',
            password: 'Paramount@123',
          });
          console.log(response);
        }}
      >
        Login and get details displayed on page
      </button>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{JSON.stringify(restaurantOwner)}</div>
      )}
    </AdminLayout>
  );
};

export default Test;
