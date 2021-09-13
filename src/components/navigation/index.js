/* eslint-disable no-nested-ternary */
import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { MenuItem } from './styles';

const NavigationComponent = ({ children }) => {
  return (
    <>
      <Menu>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </Menu>
      <Grid container justify="center">
        {children}
      </Grid>
    </>
  );
};

export default NavigationComponent;
