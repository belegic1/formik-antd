import { Formik, Form } from 'formik';
import { Row } from 'antd';

import GlobalFormElement from './GlobalFormElement';

const inputs = [
  {
    type: 'text',
    name: 'textInput',
    label: 'Text input',
    span: 8,
  },
  {
    type: 'select',
    name: 'regions',
    mode: 'multiple',
    label: 'Regioni',
    span: 8,
    options: [
      { label: 'First option', value: 'first' },
      { label: 'Second option', value: 'second' },
      { label: 'Third option', value: 'third' },
    ],
  },
  {
    type: 'select',
    name: 'district',
    mode: 'single',
    label: 'Distrikti',
    span: 8,
    options: [
      { label: 'First option', value: 'first' },
      { label: 'Second option', value: 'second' },
      { label: 'Third option', value: 'third' },
    ],
  },
  {
    type: 'date',
    name: 'dateFrom',
    label: 'Activation From',
    span: 4,
  },
  {
    type: 'date',
    name: 'dateTo',
    label: 'Activation To',
    span: 4,
  },
];
const MyForm = () => {
  const initialValues = {
    // Define your initial form values here
    // For example: selectValue: ''
    district: '',
    regions: [],
    dateFrom: '',
    dateTo: '',
    textInput: '',
  };

  const handleSubmit = (values, actions) => {
    // Handle form submission logic here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <Row
            style={{
              width: '50%',
              background: 'blue',
            }}
          >
            {' '}
            {inputs.map((inp, i) => (
              <GlobalFormElement
                key={i}
                {...inp}
                values={values}
                setFieldValue={setFieldValue}
              />
            ))}
          </Row>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default MyForm;
