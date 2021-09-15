import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { device } from '../../devices';

export const ButtonComponent = styled(Button)`
  width: ${({ width }) => width || '30vw'};
  height: ${({ height }) => height || '5vh'};

  && {
    margin: ${({ margin }) => margin || '5vh'};
  }

  .MuiButton-label {
    padding-top: 0.3rem;
    font-weight: ${({ strong }) => (strong ? '700' : '400')};
    font-size: ${({ fontSize }) => fontSize || '20px'};
    text-decoration: ${({ underline }) => underline || 'none'};
  }
  .MuiTouchRipple-root {
    background-color: ${({ background }) => background};
  }
`;
