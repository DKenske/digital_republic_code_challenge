/* eslint-disable camelcase */
/* eslint-disable radix */
import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardResult } from '../../components/cards/cardResult';
import { CardResultSection } from '../../components/cards/cardResultSection';
import { CardResultWrapper } from '../../components/cards/cardResultWrapper';
import {
  handleGetPrices,
  handleGetResult,
  handleGetTotalPrice,
} from '../../utils/handlers';
import { AmbientTypes, InkTypes } from '../../utils/options';

export const FormResult = () => {
  const result = handleGetResult();
  const { ink_type, ambient_type, coats_qnt } = useSelector(
    (state) => state.CalculatorData
  );

  return (
    <CardResult>
      <CardResultWrapper>
        <CardResultSection header>
          Total area: {result.totalAreaOfWalls}m2
        </CardResultSection>
        <CardResultSection>
          <strong>Details:</strong>
          <Grid container direction="column" justify="center">
            <strong>Ink Cans:</strong>
            {result.ink_cans.map((item) => (
              <div>
                {item.quantity}x of {item.ink_can}L
              </div>
            ))}
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>Finish:</strong>
            <div>{InkTypes.find((item) => item.id === ink_type).label}</div>
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>Ambient:</strong>
            <div>
              {AmbientTypes.find((item) => item.id === ambient_type).label}
            </div>
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>Coats:</strong>
            <div>{coats_qnt}</div>
          </Grid>
        </CardResultSection>

        <CardResultSection>
          <strong>Pricing:</strong>

          <Grid container direction="column" justify="center">
            <strong>per-can:</strong>
            {result.ink_cans.map((item) => (
              <div>
                {item.ink_can}L : R$
                {handleGetPrices(item, true)}
              </div>
            ))}
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>total-wheight:</strong>
            {result.ink_cans.map((item) => (
              <div>
                {item.ink_can}L : R$
                {handleGetPrices(item, false)}
              </div>
            ))}
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>total-wheight with coats:</strong>
            {result.ink_cans.map((item) => (
              <div>
                {item.ink_can}L : R$
                {handleGetPrices(item)}
              </div>
            ))}
          </Grid>
          <Grid container direction="column" justify="center">
            <strong>Total:</strong>R${handleGetTotalPrice(result)}
          </Grid>
        </CardResultSection>
      </CardResultWrapper>
    </CardResult>
  );
};
