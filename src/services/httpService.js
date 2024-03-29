import axios from 'axios';
import swal from './modalService';
import logger from './logService';

//axios.defaults.baseURL = process.env.REACT_APP_NGROK_URL;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    swal.error('An unexpected error occurred');
  }

  return Promise.reject(error);
});

export function expectedError(error, statusCode) {
  return error.response && error.response.status === statusCode;
}

export function getErrors(errors) {
  return errors.split();
}

// export function setJwt(jwt) {
//   axios.defaults.headers.common['x-auth-token'] = jwt;
// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  // setJwt,
  expectedError
};
