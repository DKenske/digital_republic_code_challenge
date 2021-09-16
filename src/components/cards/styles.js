import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const CardResultSectionWrapper = styled(Grid)`
  && {
    height: 100%;
  }
`;

export const CardWrapper = styled(Grid)`
  background-color: #e0b9e9;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #999;
  && {
    margin: 10px;
    min-height: 50vh;
    min-width: 30vw;
    max-width: 30vw;
    max-height: 50vh;
    padding: 15px;
  }
`;

export const CardSection = styled(Grid)`
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #999;
  && {
    height: ${({ header }) => (header ? '8vh' : '35vh')};
    max-height: ${({ header }) => (header ? '8vh' : '35vh')};
    margin: 10px;
    padding: 15px;
    overflow: auto;
  }
`;

export const TotalAreaTitle = styled.strong`
  font-size: 30px;
`;
