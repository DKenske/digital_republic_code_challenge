import React from 'react';
import { BodyContent } from './styles';

const Body = ({ children, background }) => {
  return (
    <BodyContent
      container
      direction="column"
      justify="center"
      alignItems="center"
      background={background}
    >
      {children}
    </BodyContent>
  );
};

export default Body;
