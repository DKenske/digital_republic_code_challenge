import React from 'react';
import { Body, Text } from './styles';

const TitleComponent = ({ style, text }) => (
  <Body style={style}>
    <Text>{text}</Text>
  </Body>
);

// export default React.memo(TitleComponent);
export default TitleComponent;
