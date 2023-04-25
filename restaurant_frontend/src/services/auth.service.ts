import axios from 'axios';
import { IRestaurantOwner } from '../Interfaces/index';
import { handleAxiosError, handleSuccess } from '@utils/response.utils';

// const API_URI = 'http://localhost:9000';
// const API_URI = process.env.API_URI;
const API_URI = 'https://api.foodbidding.com';
const register = async (formData: Partial<IRestaurantOwner>) => {
  try {
    const { data } = await axios.post(`${API_URI}/users/register`, formData);
    return handleSuccess(data?.message);
  } catch (error: any) {
    handleAxiosError(error);
  }
};

// log in user
const login = async (formData: Partial<IRestaurantOwner>) => {
  try {
    const { data } = await axios.post(`${API_URI}/users/login`, formData);
    return handleSuccess(data?.message);
  } catch (error: any) {
    handleAxiosError(error);
  }
};

// get logged in user info
const getRestaurantOwner = async () => {
  try {
    console.log('Trying to get info');
    const { data } = await axios.get(`${API_URI}/users/me`);
    return data?.data;
  } catch (error: any) {
    handleAxiosError(error);
  }
};

const exportedObject = {
  register,
  getRestaurantOwner,
  login,
};

export default exportedObject;
