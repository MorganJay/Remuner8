import React, { useState } from 'react';
import { Input } from 'reactstrap';
import dateFormat from 'dateformat';

import { FocusLabel } from 'components/Forms/Common/SelectBox.styles';

const getValidDate = date => dateFormat(date, 'yyyy-mm-dd');

const DatePicker = ({ date, onChange, label, adjustLabel, ...props }) => {
  const [today, setDate] = useState();
  const setTodaysDate = date => setDate(getValidDate(date));

  return (
    <>
      <Input
        name="datepicker"
        type="date"
        defaultValue={date ? getValidDate(date) : today}
        onChange={onChange}
        onClick={() => setTodaysDate(today)}
        //style={{ height: '51px' }}
      />
      <FocusLabel htmlFor="datepicker" adjustLabel={adjustLabel}>
        {label}
      </FocusLabel>
    </>
  );
};

export default DatePicker;
