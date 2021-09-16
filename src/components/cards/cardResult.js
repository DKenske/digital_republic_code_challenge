import React from 'react';
import { CardWrapper } from './styles';

export const CardResult = ({ children }) => {
  return (
    <CardWrapper container justify="center">
      {children}
    </CardWrapper>
  );
};
