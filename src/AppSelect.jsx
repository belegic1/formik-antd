import { useState } from 'react';
import { Select } from './components/Select';

const options = [
  { label: 'Sve / Ponisti', value: 'allValues' },
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];
const options2 = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function AppSelect() {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState(null);

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select
        options={options2}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </>
  );
}

export default AppSelect;
