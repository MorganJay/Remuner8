const employeeKey = 'employee';

export const saveEmployee = employee =>
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

export default { saveEmployee, getCurrentEmployee, currentEmployee };
