import styled from 'styled-components';
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from 'react-icons/io';
import { Grid, Stepper } from '@material-ui/core';

export const FormTitle = styled.h1`
  margin-bottom: 5vh;
`;

export const FormWrapper = styled(Grid)`
  margin: 10px;
`;

export const AddIcon = styled(IoIosAddCircleOutline)`
  font-size: 30px;
  cursor: pointer;
  margin: 10px;
`;
export const RemoveIcon = styled(IoIosRemoveCircleOutline)`
  font-size: 30px;
  cursor: pointer;
  margin: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 15px;
`;

export const CardListBody = styled(Grid)`
  overflow-y: auto;

  ::-webkit-scrollbar {
    background: rgba(245, 209, 209, 0.562);
    opacity: 0.5;
    width: 0.3vw;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 132, 132, 0.562);
    border-radius: 10px;
  }

  && {
    max-height: 50vh;
  }
`;

export const CardBody = styled(Grid)`
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #999;
  && {
    margin: 10px;
    min-height: 20vh;
    max-height: 20vh;
    padding: 0 15px 0 15px;
  }
`;

export const CardResult = styled(Grid)`
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

export const PageStepper = styled(Stepper)`
  && {
    background-color: #e0b2e4;
  }
`;
