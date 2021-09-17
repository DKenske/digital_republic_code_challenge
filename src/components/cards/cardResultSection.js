import React from 'react';
import { CardSection, TotalAreaTitle } from './styles';

export const CardResultSection = ({ children, header }) => {
  return (
    <CardSection
      container
      xs={header ? 11 : 5}
      md={header ? 11 : 5}
      lg={header ? 11 : 5}
      header={header}
      justify="center"
      alignContent={header ? 'center' : 'flex-start'}
    >
      {!header ? children : <TotalAreaTitle>{children}</TotalAreaTitle>}
    </CardSection>
  );
};
