import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { useField } from 'formik';

import { FocusLabel } from 'components/Forms/Common/SelectBox.styles';
import { getValidDate, setTodaysDate } from 'utils/functions';

const DatePicker = ({ name, date, onChange, label, adjustLabel, ...props }) => {
  const [today, setDate] = useState();

  return (
    <>
      <Input
        name={name}
        type="date"
        defaultValue={date ? getValidDate(date) : today}
        onChange={onChange}
        onClick={() => setTodaysDate(today, setDate)}
        //style={{ height: '51px' }}
        {...props}
      />
      <FocusLabel htmlFor={name} adjustLabel={adjustLabel}>
        {label}
      </FocusLabel>
    </>
  );
};

export default DatePicker;

export const FormikDatePicker = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [today, setDate] = useState();
  const errorText = meta.error && meta.touched && meta.error;

  return (
    <Input
      type="date"
      title={label}
      onClick={() => setTodaysDate(today, setDate)}
      className={meta.touched ? (meta.error ? 'is-invalid' : 'is-valid') : ''}
      invalid={!!errorText}
      {...field}
      {...props}
    />
  );
};
