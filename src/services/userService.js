import http from './httpService';

const apiEndpoint = '/accounts/register';

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    username: user.username,
    confirmPassword: user.confirmPassword
  });
}

export function forgotPassword(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    username: user.username,
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
