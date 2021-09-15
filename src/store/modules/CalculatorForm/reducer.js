/* eslint-disable radix */
import produce from 'immer';
import { CalculatorPagesTitles } from '../../../utils/options';
import {
  CLEAN_ERRORS,
  GENERATE_WALLS,
  IS_INVALID_HEIGHT,
  IS_INVALID_HEIGHT_BASED_ON_DOORS,
  PAGE_CHANGED,
  SET_AMBIENT_TYPE,
  SET_COATS_QNT,
  SET_ERROR_FORM,
  SET_INK_TYPE,
  SET_PAGE,
  SET_WALLS_QNT,
  SET_WALL_MEASURES,
  WALLS_WINDOWS_DOORS_MEASURES_DONT_MATCH,
} from '../../../utils/reducersTypes';

const INITIAL_STATE = {
  error: {
    msg: undefined,
    status: false,
  },
  page: 1,
  title: CalculatorPagesTitles.find((item) => item.id === 1).label,
  ambient_type: undefined,
  ink_type: undefined,
  coats_qnt: 0,
  walls_qnt: 0,
  walls_obj_arr: [],
};

export default function CalculatorFormReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case SET_PAGE: {
        draft.page = payload.page_id;
        draft.error = {
          msg: undefined,
          status: false,
        };
        break;
      }

      case PAGE_CHANGED: {
        draft.title = payload.page_title;
        break;
      }

      case SET_AMBIENT_TYPE: {
        draft.ambient_type = payload.ambient_type;
        break;
      }

      case SET_INK_TYPE: {
        draft.ink_type = payload.ink_type;
        break;
      }

      case SET_WALLS_QNT: {
        draft.walls_qnt = parseInt(payload.walls_qnt);
        break;
      }

      case GENERATE_WALLS: {
        draft.walls_obj_arr = payload.walls_obj_arr;
        break;
      }

      case SET_WALL_MEASURES: {
        draft.walls_obj_arr = payload.wallsArrUpdated;
        break;
      }

      case SET_COATS_QNT: {
        draft.coats_qnt = parseInt(payload.coats_qnt);
        break;
      }

      case SET_ERROR_FORM: {
        draft.error = {
          msg: 'You must to fill all fields',
          status: true,
        };
        break;
      }

      case WALLS_WINDOWS_DOORS_MEASURES_DONT_MATCH: {
        draft.error = {
          msg: ` The total area of doors and windows must be at most 50% of the **${payload.wall_name}'s** area`,
          status: true,
        };
        break;
      }
      case IS_INVALID_HEIGHT: {
        draft.error = {
          msg: `the ${payload.wall_name}'s height might be more than 100cm and less than 1500cm!`,
          status: true,
        };
        break;
      }
      case IS_INVALID_HEIGHT_BASED_ON_DOORS: {
        draft.error = {
          msg: `the ${payload.wall_name}'s height might be more than 219cm!`,
          status: true,
        };
        break;
      }

      case CLEAN_ERRORS: {
        draft.error = {
          msg: undefined,
          status: false,
        };
        break;
      }
      default:
    }
  });
}
