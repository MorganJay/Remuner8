import http from './httpService';

const apiEndpoint = '/accounts/register';

export function register(user) {
  return http.post(apiEndpoint, {
    userName: user.userName,
    email: user.email,
    password: user.password,
    confirmPassword: user.confirmPassword
  });
}

export function forgotPassword(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    userName: user.userName,
    confirmPassword: user.confirmPassword
  });
}

export function resetPassword(user) {
  return http.post(apiEndpoint, {
    token: user.token,
    newPassword: user.newPassword,
    email: user.email,
    confirmPassword: user.confirmPassword
  });
}

export function refreshToken(user) {
  return http.post(apiEndpoint, {
    token: user.token,
    refreshToken: user.refreshToken
  });
}

export default {
  register,
  forgotPassword,
  resetPassword
};
