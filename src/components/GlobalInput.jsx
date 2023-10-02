import { Input } from 'antd';
import { Field } from 'formik';
import React from 'react';

const GlobalInput = ({ name, setFieldValue }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>Text Input</label>
      <Field name="textInput">
        {({ field }) => (
          <Input
            {...field}
            placeholder="Enter text"
            onChange={(e) => {
              // Update Formik state directly with the input value
              setFieldValue(name, e.target.value);
            }}
          />
        )}
      </Field>
    </div>
  );
};

export default GlobalInput;
