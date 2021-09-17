/* eslint-disable radix */
import { Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/input/index';
import { handleWallArea } from '../../utils/handlers';

import { CardBody, CardListBody } from './styles';

export const FormWallsMeasures = () => {
  const wallList = useSelector((state) => state.CalculatorData.walls_obj_arr);

  useMemo(() => console.log(wallList), [wallList]);

  const handleOnChange = (measure, item, e) => {
    // (wallList);
    e.preventDefault();
    handleWallArea({
      ...item,
      [measure]:
        measure === 'wall_name' ? e.target.value : parseInt(e.target.value),
    });
  };
  return (
    <CardListBody
      container
      xs={6}
      md={6}
      lg={6}
      alignContent="flex-start"
      justify="center"
    >
      {wallList.map((item) => (
        <CardBody
          container
          xs={12}
          md={5}
          lg={5}
          justify="center"
          alignContent="flex-start"
        >
          <Input
            defaultValue={item.wall_name}
            onChange={(e) => handleOnChange('wall_name', item, e)}
          />
          <Grid container direction="row" spacing={2} justify="center">
            <Grid item xs={12} md={5} lg={5}>
              <Input
                placeholder="Width"
                label="wall width"
                onChange={(e) => handleOnChange('wall_width', item, e)}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Input
                placeholder="Height"
                label="wall height"
                onChange={(e) => handleOnChange('wall_height', item, e)}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Input
                placeholder="Doors Qnt"
                label="Doors Qnt"
                onChange={(e) => handleOnChange('doorQnt', item, e)}
              />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <Input
                placeholder="Windows Qnt"
                label="Windows Qnt"
                onChange={(e) => handleOnChange('windowQnt', item, e)}
              />
            </Grid>
          </Grid>
        </CardBody>
      ))}
    </CardListBody>
  );
};
