/* eslint-disable radix */
/* eslint-disable camelcase */
import { store } from '../store/index';

export const verifyIfPageHasData = () => {
  const { page, ambient_type, ink_type, coats_qnt, walls_qnt, error } =
    store.getState().CalculatorData;

  console.log(!!error.msg);

  switch (page) {
    case 1:
      return !!ambient_type;
    case 2:
      return !!ink_type;
    case 3:
      return !!walls_qnt;
    case 4:
      return !!coats_qnt;
    case 5:
      return !error.status;

    default:
  }

  return false;
};

export const verifyAndReturnMeasures = (wallObj) => {
  const { wall_height, wall_width, doorQnt, windowQnt } = wallObj;

  return {
    isInvalidHeight: wallObj.wall_height < 100 || wallObj.wall_height > 1500,
    isInvalidHeightBasedOnDoors: doorQnt > 0 && wall_height < 220,
    wallArea: wall_width * wall_height,
    doorsAndWindowsAreas: 80 * 190 * doorQnt + 200 * 120 * windowQnt,
  };
};
