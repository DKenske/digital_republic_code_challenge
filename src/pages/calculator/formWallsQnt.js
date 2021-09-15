import { Grid } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/input/index';
import { useCalculatorForm } from '../../store/modules/CalculatorForm/actions';
import { AddIcon, RemoveIcon } from './styles';

export const FormWallsQnt = () => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useMemo(() => {
    quantity < 1 && setQuantity(1);

    dispatch(
      useCalculatorForm('@walls/set_walls_qnt', { walls_qnt: quantity })
    );
  }, [quantity]);

  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <RemoveIcon onClick={() => setQuantity(quantity - 1)} />
      <Input
        variant="outlined"
        width="15%"
        value={quantity}
        defaultValue={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <AddIcon onClick={() => setQuantity(quantity + 1)} />
    </Grid>
  );
};
