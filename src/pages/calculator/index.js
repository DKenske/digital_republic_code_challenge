/* eslint-disable no-confusing-arrow */
/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Step, StepLabel } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { ErrorText, FormTitle, PageStepper } from './styles';
import Body from '../../components/body/index';
import { FormManager } from './_formManager';
import ButtonComponent from '../../components/button/index';
import { handlePageChange } from '../../utils/handlers';
import { PageSteps } from '../../utils/options';
import { useCalculatorForm } from '../../store/modules/CalculatorForm/actions';
import { SET_PAGE } from '../../utils/reducersTypes';

export const Calculator = () => {
  const calculatorData = useSelector((state) => state.CalculatorData);

  const dispatch = useDispatch();

  const handleChangeStep = (page_id) =>
    dispatch(useCalculatorForm(SET_PAGE, { page_id }));
  const { enqueueSnackbar } = useSnackbar();

  const handleFailure = () => {
    enqueueSnackbar('Você ainda não concluiu a etapa atual', {
      variant: 'error',
      autoHideDuration: 3000,
      preventDuplicate: true,
    });
  };

  return (
    <Body background="#e0b2e4">
      <PageStepper activeStep={calculatorData.page - 1}>
        {PageSteps.map(({ page_id, label }) => {
          return (
            <Step
              key={page_id}
              onClick={() => {
                calculatorData.page >= page_id
                  ? handleChangeStep(page_id)
                  : handleFailure();
              }}
              style={{ cursor: 'pointer' }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </PageStepper>
      <FormTitle className="form-title">{calculatorData.title}</FormTitle>

      <FormManager calculatorData={calculatorData} />

      {calculatorData?.error?.status && (
        <ErrorText>{calculatorData.error.msg}</ErrorText>
      )}

      {calculatorData.page !== 6 && (
        <ButtonComponent
          label="Next!"
          margin="20px"
          width="17.5vw"
          onClick={() => handlePageChange()}
        />
      )}
    </Body>
  );
};
