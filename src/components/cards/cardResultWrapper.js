import React from 'react';
import { CardResultSectionWrapper } from './styles';

export const CardResultWrapper = ({ children }) => {
  return (
    <CardResultSectionWrapper
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
    >
      {children}
    </CardResultSectionWrapper>
  );
};
