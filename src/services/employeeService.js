import http from './httpService';

const apiEndpoint = '/employees';
const employeeKey = 'employee';

function employeeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export const saveEmployeeProfile = employee =>
  localStorage.setItem(employeeKey, JSON.stringify(employee));

export const getCurrentEmployee = () => {
  try {
    const employee = localStorage.getItem(employeeKey);
    return JSON.parse(employee);
  } catch (error) {
    return null;
  }
};

const currentEmployee = getCurrentEmployee();

export const getEmployees = () => http.get(apiEndpoint);

export function getEmployee(employeeId) {
  return http.get(employeeUrl(employeeId));
}

export function saveEmployee(employee) {
  if (!employee._id) return http.post(apiEndpoint, employee);

  const body = { ...employee };
  delete body._id;
  return http.put(employeeUrl(employee._id), body);
}

export function deleteEmployee(employeeId) {
  return http.delete(employeeUrl(employeeId));
}

export default {
  saveEmployee: saveEmployeeProfile,
  getCurrentEmployee,
  currentEmployee
};

