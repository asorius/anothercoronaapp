import React, { useState } from 'react';
import { list, MuiInput } from '../utils';
import Grid from '@material-ui/core/Grid';

export default function SearchInput({ onSubmit: findAndLoadDataOf }) {
  const [id, setid] = useState('');

  const onSearch = (country) => {
    if (country !== '') {
      const input = country.toLowerCase();
      const possibleCountries = Object.entries(list).filter(([id, name]) => {
        return name.toLowerCase().includes(input);
      });
      if (possibleCountries.length === 1) {
        const id = possibleCountries[0][0];
        setid(id);
        findAndLoadDataOf(id);
      }
    }
  };

  return (
    <Grid
      item
      container
      justify="center"
      xs={12}
      md={8}
      component={'form'}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (id) {
          findAndLoadDataOf(id);
        }
      }}
    >
      <Grid item>
        <MuiInput inputAction={onSearch}></MuiInput>
      </Grid>
    </Grid>
  );
}
