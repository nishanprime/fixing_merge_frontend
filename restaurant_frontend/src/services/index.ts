import axios from 'axios';
import ROute from 'next/router';

axios.defaults.withCredentials = true;
axios.defaults.params = {};
axios.interceptors.response.use(function (config) {
  // set to headers if needed
  return config;
});
import AuthService from './auth.service';

export { AuthService };
