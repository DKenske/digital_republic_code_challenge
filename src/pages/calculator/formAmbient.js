import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { AmbientTypes } from '../../utils/options';
import { useCalculatorForm } from '../../store/modules/CalculatorForm/actions';

export const FormAmbient = () => {
  const dispatch = useDispatch();

  const handleAmbientTypeChange = (e, value) => {
    e.preventDefault();
    dispatch(
      useCalculatorForm('@ambient/set_ambient_type', {
        ambient_type: value.id,
      })
    );
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={AmbientTypes}
      getOptionLabel={(option) => option.label}
      style={{ width: 335 }}
      onChange={handleAmbientTypeChange}
      renderInput={(params) => (
        <TextField {...params} label="Select" variant="outlined" />
      )}
    />
  );
};
