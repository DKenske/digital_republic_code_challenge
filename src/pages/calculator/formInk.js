import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { InkTypes } from '../../utils/options';
import { useCalculatorForm } from '../../store/modules/CalculatorForm/actions';

export const FormInk = () => {
  const dispatch = useDispatch();

  const handleAmbientTypeChange = (e, value) => {
    e.preventDefault();
    dispatch(
      useCalculatorForm('@ink/set_ink_type', {
        ink_type: value.id,
      })
    );
  };

  return (
    <Autocomplete
      options={InkTypes}
      getOptionLabel={(option) => option.label}
      style={{ width: 335 }}
      onChange={handleAmbientTypeChange}
      renderInput={(params) => (
        <TextField {...params} label="Select" variant="outlined" />
      )}
    />
  );
};
