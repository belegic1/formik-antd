import { Col, DatePicker } from 'antd';
import { Field } from 'formik';
import moment from 'moment';
import React from 'react';

const GlobalDate = ({ name, setFieldValue, value, span }) => {
  return (
    <Col spa={span}>
      <label htmlFor="date">Select Date</label>
      <Field name={name}>
        {({ field }) => (
          <DatePicker
            {...field}
            style={{ width: '100%' }}
            placeholder="Select a date"
            onChange={(date, dateString) => {
              console.log(dateString);
              console.log(field.name);

              setFieldValue(name, dateString);
            }}
            value={value ? moment(value) : null}
          />
        )}
      </Field>
    </Col>
  );
};

export default GlobalDate;
