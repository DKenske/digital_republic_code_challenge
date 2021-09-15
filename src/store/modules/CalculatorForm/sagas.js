/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { all, put, takeLatest } from '@redux-saga/core/effects';
import { CalculatorPagesTitles } from '../../../utils/options';
import { useCalculatorForm } from './actions';

function* changePage({ payload }) {
  const { page_id } = payload;

  if (page_id <= CalculatorPagesTitles[CalculatorPagesTitles.length - 1].id) {
    const page_title = CalculatorPagesTitles.find(
      (item) => item.id === payload.page_id
    ).label;

    yield put(useCalculatorForm('@page/page_changed', { page_title }));
  }
  yield put(useCalculatorForm('@page/checkout'));
}

function* generateWallObjects({ payload }) {
  const { walls_qnt } = payload;

  const WallObj = (index) => {
    return {
      wall_id: index,
      wall_name: `parede ${index}`,
      wall_width: 0,
      wall_height: 100,
      wall_area: undefined,
      doorQnt: 0,
      windowQnt: 0,
    };
  };

  const walls_obj_arr = new Array(walls_qnt);

  for (let i = 0; i < walls_qnt; i++) {
    walls_obj_arr[i] = WallObj(i);
  }

  yield put(useCalculatorForm('@walls/generate_walls', { walls_obj_arr }));
}

// function* updateWallMeasures({ payload }) {
//   const { wall_id } = payload.walls_obj;

//   yield put(useCalculatorForm('@walls/generate_walls', { walls_obj_arr }));
// }

export default all([
  takeLatest('@page/set_page', changePage),
  takeLatest('@walls/set_walls_qnt', generateWallObjects),
  //   takeLatest('@walls/set_wall_measures', updateWallMeasures),
]);
