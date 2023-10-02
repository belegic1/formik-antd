import { Col, Select } from 'antd';
import { Field } from 'formik';
import React from 'react';

const GlobalSelect = ({ setFieldValue, name, options, mode }) => {
  return (
    <Col span={8}>
      <label htmlFor={name}>Select Values</label>
      <Field name="secondValue">
        {({ field, meta }) => (
          <Select
            {...field}
            mode={mode === 'multiple' && 'multiple'} // Enable multiple selection
            style={{ width: '100%' }}
            placeholder="Select multiple values"
            onChange={(value) => {
              setFieldValue(name, value);
            }}
            options={options}
          />
        )}
      </Field>
    </Col>
  );
};

export default GlobalSelect;
