import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { ErrorText, FormTitle, FormWrapper } from './styles';
import Body from '../../components/body/index';
import { FormManager } from './_formManager';
import ButtonComponent from '../../components/button/index';
import { handlePageChange } from '../../utils/handlers';

export const Calculator = () => {
  const calculatorData = useSelector((state) => state.CalculatorData);

  return (
    <Body background="#e0b2e4">
      <FormTitle className="form-title">{calculatorData.title}</FormTitle>

      <FormManager calculatorData={calculatorData} />

      {calculatorData?.error?.status && (
        <ErrorText>{calculatorData.error.msg}</ErrorText>
      )}

      <ButtonComponent
        label="Next!"
        margin="20px"
        width="17.5vw"
        onClick={() => handlePageChange()}
      />
    </Body>
  );
};
