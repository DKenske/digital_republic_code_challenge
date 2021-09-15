/* eslint-disable camelcase */
/* eslint-disable radix */
import { Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/input/index';
import { handleGetResult, handleWallArea } from '../../utils/handlers';

import { CardBody, CardListBody, CardResult } from './styles';

export const FormResult = () => {
  const { walls_obj_arr } = useSelector((state) => state.CalculatorData);

  return <CardResult>{handleGetResult()}</CardResult>;
};
