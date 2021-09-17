/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */
/* eslint-disable prefer-spread */
/* eslint-disable radix */
/* eslint-disable camelcase */
import { store } from '../store/index';
import { InkOptions } from './options';

export const verifyIfPageHasData = () => {
  const { page, ambient_type, ink_type, coats_qnt, walls_qnt, error } =
    store.getState().CalculatorData;

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

export const verifyInkCans = (inkQnt) => {
  let inkCansArray = [];
  let inkInitialQnt = inkQnt;

  const recursiveChecker = () => {
    // remove o tamanho de lata que for excessivo pra quantia de tinta restante/atual da repetição do calculo
    const excessValuesRemoved = InkOptions.filter(
      (item) => inkInitialQnt % item.value !== inkInitialQnt
    );

    // faz o calculo de quantas latas são preciso de cada litragem de tinta baseado na quantidade que o usuário precisa
    const arrayOfComparisons = excessValuesRemoved.map(
      (item) => inkInitialQnt / item.value
    );

    // seleciona a menor quantia de latas para que o usuário não tenha de comprar varias latas de litragem menor
    const getBiggerCanBasedOnInkQnt = Math.min.apply(Math, arrayOfComparisons);

    // compara e seleciona a qual lata a quantia a cima corresponde
    const getInkCan = excessValuesRemoved.find(
      (item) => inkInitialQnt / item.value === getBiggerCanBasedOnInkQnt
    );

    // muda a quantia inicial de tinta necessária para a quantia que restou depois do calculo a cima.
    inkInitialQnt %= getInkCan.value;

    // ja adiciona a uma lista, uma frase contendo a quantidade necessaria e de qual tinta é necessario para mostrar no front end
    inkCansArray.push({
      ink_can: getInkCan.value,
      quantity: parseInt(getBiggerCanBasedOnInkQnt),
    });

    // checa se a quantia for menor que 0.5, se for e ja tiver uma lata de 0.5 ele adiciona mais uma, se não, ele adiciona uma lata e quebra o ciclo recursivo pois ja foi adicionada uma lata para cobrir esse valor de parede
    if (inkInitialQnt < 0.5) {
      const has05Can = inkCansArray.find((item) => item.ink_can === 0.5);

      has05Can
        ? (inkCansArray = inkCansArray.map((item) =>
            item.ink_can === 0.5
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ))
        : inkCansArray.push({
            ink_can: 0.5,
            quantity: 1,
          });

      return;
    }
    recursiveChecker();
  };

  recursiveChecker();

  return { ink_cans: inkCansArray };
};
