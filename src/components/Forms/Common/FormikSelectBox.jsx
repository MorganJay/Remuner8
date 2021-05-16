import React from 'react';
import { useField } from 'formik';

import SelectBox from './SelectBox';

const FormikSelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <SelectBox
        title={label}
        className={meta.touched ? (meta.error ? 'is-invalid' : 'is-valid') : ''}
        invalid={!!errorText}
        {...field}
        {...props}
      />
    </>
  );
};

export default FormikSelectBox;
