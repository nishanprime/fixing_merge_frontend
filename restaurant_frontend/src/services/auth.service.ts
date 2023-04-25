import axios from 'axios';
import { IRestaurantOwner } from '../Interfaces/index';
const API_URI = 'http://localhost:9000';
const register = async (formData: Partial<IRestaurantOwner>) => {
  try {
    const { data } = await axios.post(`${API_URI}/users/register`, formData);
  } catch (error) {}
};

// log in user
const login = async (formData: Partial<IRestaurantOwner>) => {
  try {
    console.log('Trying to login to', API_URI);
    const { data } = await axios.post(`${API_URI}/users/login`, formData);
    return data?.data;
  } catch (error) {}
};

// get logged in user info
const getRestaurantOwner = async () => {
  try {
    console.log('Trying to get info');
    const { data } = await axios.get(`${API_URI}/users/me`);
    return data?.data;
  } catch (error) {}
};

const exportedObject = {
  register,
  getRestaurantOwner,
  login,
};

export default exportedObject;
