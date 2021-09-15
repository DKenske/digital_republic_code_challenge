import { combineReducers } from 'redux';
import CalculatorFormReducer from './CalculatorForm/reducer';

export default combineReducers({ CalculatorData: CalculatorFormReducer });
