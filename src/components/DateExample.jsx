import React from 'react';
import { Formik, Form, Field } from 'formik';
import { DatePicker, Button } from 'antd';
// import 'antd/dist/antd.css';
const DateExample = () => {
  return (
    <Formik
      initialValues={{
        date: null,
      }}
      onSubmit={(values) => {
        // Handle form submission logic here
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Date:</label>
            <Field name="date">
              {({ field }) => (
                <DatePicker
                  {...field}
                  style={{ width: '100%' }}
                  onChange={(date) =>
                    handleChange({ target: { name: 'date', value: date } })
                  }
                  value={values.date}
                />
              )}
            </Field>
          </div>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default DateExample;
