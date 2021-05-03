import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndpoint = '/accounts/login';
const tokenKey = 'token';
const userKey = 'Username';

export async function login(email, password) {
  const {
    data: { token, userName }
  } = await http.post(apiEndpoint, {
    email,
    password
  });
  localStorage.setItem(tokenKey, token);
  localStorage.setItem(userKey, userName);
  return userName;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(userKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const userName = localStorage.getItem(userKey);
    const user = jwtDecode(jwt);
    return { ...user, userName };
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

//http.setJwt(getJwt());
const currentUser = getCurrentUser();

export default {
  login,
  loginWithJwt,
  logout,
  currentUser,
  getJwt
};
