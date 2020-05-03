import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { list } from '../utils';

export default function ControllableStates({ inputAction }) {
  const onInputChange = (e, val) => {
    if (val) {
      inputAction(val);
    }
  };
  return (
    <Autocomplete
      autoHighlight
      blurOnSelect={true}
      onChange={onInputChange}
      options={Object.entries(list).map(([id, name]) => name)}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter a country name"
          variant="outlined"
        />
      )}
    />
  );
}
