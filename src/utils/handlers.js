/* eslint-disable radix */
/* eslint-disable no-confusing-arrow */
/* eslint-disable function-paren-newline */
/* eslint-disable camelcase */
import { useCalculatorForm } from '../store/modules/CalculatorForm/actions';
import { store } from '../store/index';
import { verifyAndReturnMeasures, verifyIfPageHasData } from './verifiers';
import {
  CLEAN_ERRORS,
  IS_INVALID_HEIGHT,
  IS_INVALID_HEIGHT_BASED_ON_DOORS,
  SET_ERROR_FORM,
  SET_PAGE,
  SET_WALL_MEASURES,
  WALLS_WINDOWS_DOORS_MEASURES_DONT_MATCH,
} from './reducersTypes';

export const handlePageChange = () => {
  const actualPage = store.getState().CalculatorData.page;

  if (verifyIfPageHasData()) {
    store.dispatch(useCalculatorForm(SET_PAGE, { page_id: actualPage + 1 }));
    return;
  }

  store.dispatch(useCalculatorForm(SET_ERROR_FORM));
};

export const handleWallArea = (wallObj) => {
  const {
    isInvalidHeight,
    isInvalidHeightBasedOnDoors,
    wallArea,
    doorsAndWindowsAreas,
  } = verifyAndReturnMeasures(wallObj);

  const { walls_obj_arr } = store.getState().CalculatorData;

  const wallsArrUpdated = walls_obj_arr.map((item) =>
    item.wall_id === wallObj.wall_id
      ? { ...wallObj, wall_area: wallArea - doorsAndWindowsAreas }
      : item
  );

  store.dispatch(useCalculatorForm(CLEAN_ERRORS, wallObj));

  if (isInvalidHeight) {
    store.dispatch(useCalculatorForm(IS_INVALID_HEIGHT, wallObj));
  }

  if (isInvalidHeightBasedOnDoors) {
    store.dispatch(
      useCalculatorForm(IS_INVALID_HEIGHT_BASED_ON_DOORS, wallObj)
    );
  }

  if (doorsAndWindowsAreas > wallArea / 2) {
    store.dispatch(
      useCalculatorForm(WALLS_WINDOWS_DOORS_MEASURES_DONT_MATCH, wallObj)
    );
  }

  store.dispatch(
    useCalculatorForm(SET_WALL_MEASURES, {
      wallsArrUpdated,
    })
  );
};

export const handleGetResult = () => {
  const { walls_obj_arr } = store.getState().CalculatorData;

  const arrOfAreas = walls_obj_arr.map((item) => item.wall_area);

  const totalAreaOfWalls = arrOfAreas.reduce(add, 0) / 10000;
  const litersOfInk = totalAreaOfWalls / 5;

  return totalAreaOfWalls;
};

const add = (ac, a) => {
  return ac + a;
};
