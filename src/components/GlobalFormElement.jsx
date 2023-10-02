import React from 'react';
import GlobalSelect from './GlobalSelect';
import GlobalDate from './GlobalDate';
import GlobalInput from './GlobalInput';

const GlobalFormElement = (props) => {
  // console.log(props);
  if (props.type === 'select') {
    return (
      <GlobalSelect
        mode={props?.mode}
        name={props.name}
        options={props.options}
        setFieldValue={props.setFieldValue}
      />
    );
  }
  if (props.type === 'date') {
    return (
      <GlobalDate
        name={props.name}
        label={props.label}
        setFieldValue={props.setFieldValue}
        value={props.values[props.name]}
      />
    );
  }

  return (
    <GlobalInput
      type={props.type}
      setFieldValue={props.setFieldValue}
      name={props.name}
      label={props.label}
      span={props.span}
    />
  );
};

export default GlobalFormElement;
