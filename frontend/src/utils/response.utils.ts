import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleAxiosError = (err: AxiosError) => {
  if (err?.response?.data) {
    toast.error((err.response.data as { message: string })?.message, {
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return null;
  }

  if (err?.response?.status === 500) {
    toast.error('Internal server error', {
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return null;
  }

  toast.error('Unexpected error occurred. Please try again.', {
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return null;
};

export const handleError = (message: string) => {
  toast.error(message, {
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const handleSuccess = (message: string) => {
  console.log(message, 'hi');
  toast.success(message, {
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return true;
};
