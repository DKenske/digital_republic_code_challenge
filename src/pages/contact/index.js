import { Grid } from '@material-ui/core';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';

import Body from '../../components/body/index';

const Contact = () => {
  return (
    <Body background="#add2f8">
      <Grid container direction="column" justify="center" xs={2}>
        <Grid container justify="start" alignItems="center">
          <h1>Contact-me:</h1>
        </Grid>
        <Grid container justify="start" alignItems="center">
          <CgMail />
          <p>daniel.takemura7@gmail.com</p>
        </Grid>
        <Grid container justify="start" alignItems="center">
          <AiOutlineWhatsApp />
          <p>(11) 96581-1269</p>
        </Grid>
      </Grid>
    </Body>
  );
};

export default Contact;
