import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const BodyContent = styled(Grid)`
  width: 100%;
  height: 100vh;
  background-color: ${({ background }) => background};
`;
