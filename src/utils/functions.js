import dateFormat from 'dateformat';

export const getValidDate = date => dateFormat(date, 'yyyy-mm-dd');

export const setTodaysDate = (date, setDate) => setDate(getValidDate(date));

export const getRandomTime = () => {
  const today = new Date();
  const backendTime = today.toLocaleTimeString('en-GB');
  const userTime = today.toLocaleTimeString();

  return { userTime, backendTime };
};

export const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const secondsToHours = time => {
  const seconds = Number(time);
  const hours = Math.floor(seconds / 3600);

  return hours;
};

export const formatDates = (data, path) => {
  if (!data) return [];

  const newData = [...data];
  newData.map(data => {
    data[path] = dateFormat(data[path], 'dd mmm yyyy');
    return data;
  });

  return newData;
};

// Payroll
export const totalEarnings = ({
  basic,
  housing,
  transport,
  otherAllowance,
  medical
}) => +basic + +housing + +transport + +medical + +otherAllowance;

export const totalDeductions = ({ tax, pension, otherDeduction }) => +tax + +pension + +otherDeduction;

export const calculateNet = (totalEarnings, totalDeductions) => (totalEarnings - totalDeductions).toFixed(2);
