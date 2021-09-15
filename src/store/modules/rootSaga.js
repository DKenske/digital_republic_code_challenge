import { all } from 'redux-saga/effects';

import FormPageSaga from './CalculatorForm/sagas';

export default function* rootSaga() {
  return yield all([FormPageSaga]);
}
