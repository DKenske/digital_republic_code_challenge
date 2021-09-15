/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import history from '../../services/history';
import { MenuItem } from './styles';

const NavigationComponent = ({ children }) => {
  return (
    <>
      <Menu>
        <MenuItem href="" onClick={() => history.push('/')}>
          Home
        </MenuItem>
        <MenuItem href="" onClick={() => history.push('/calculator')}>
          Ink Calculator
        </MenuItem>
        <MenuItem href="">Contact</MenuItem>
      </Menu>
      <Grid container justify="center">
        {children}
      </Grid>
    </>
  );
};

export default NavigationComponent;
