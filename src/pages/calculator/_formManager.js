import React from 'react';
import { FormAmbient } from './formAmbient';
import { FormCoatsQnt } from './formCoatsQnt';
import { FormInk } from './formInk';
import { FormResult } from './formResult';
import { FormWallsMeasures } from './formWallsMeasures';
import { FormWallsQnt } from './formWallsQnt';

export const FormManager = ({ calculatorData }) => {
  return (
    <>
      {calculatorData.page === 1 && <FormAmbient />}
      {calculatorData.page === 2 && <FormInk />}
      {calculatorData.page === 3 && <FormWallsQnt />}
      {calculatorData.page === 4 && <FormCoatsQnt />}
      {calculatorData.page === 5 && <FormWallsMeasures />}
      {calculatorData.page === 6 && <FormResult />}
    </>
  );
};
