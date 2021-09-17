/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { BiCalculator, BiHomeHeart, BiChat } from 'react-icons/bi';
import history from '../../services/history';
import { MenuItem } from './styles';

const NavigationComponent = ({ children }) => {
  return (
    <>
      <Menu>
        <MenuItem href="" onClick={() => history.push('/')}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <BiHomeHeart />
            <p>Home</p>
          </Grid>
        </MenuItem>
        <MenuItem href="" onClick={() => history.push('/calculator')}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <BiCalculator />
            <p>Ink Calculator</p>
          </Grid>
        </MenuItem>
        <MenuItem href="" onClick={() => history.push('/contact')}>
          {' '}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignContent="center"
            alignItems="center"
            spacing={2}
          >
            <BiChat />
            <p>Contact</p>
          </Grid>
        </MenuItem>
      </Menu>
      <Grid container justify="center">
        {children}
      </Grid>
    </>
  );
};

export default NavigationComponent;
