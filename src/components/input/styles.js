import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { device } from '../../devices';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${({ error }) => error && 'red'};
  justify-content: center;
`;

export const Input = styled(TextField)`
  width: ${({ width }) => width || '100%'};

  input {
    height: ${({ height }) => height};

    text-align: ${({ textAlign }) => textAlign || 'center'};
  }
`;
