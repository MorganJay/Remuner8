import auth from '../services/authService.js';

const LogOut = () => {
  auth.logout();
  window.location = '/login';

  return null;
};

export default LogOut;
