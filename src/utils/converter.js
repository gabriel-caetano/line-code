import nrz_l from './nrz_l';
import nrz_i from './nrz_i';
import ami from './ami';
import pseudoternary from './pseudoternary';
import manchester from './manchester';
import diferentialManchester from './diferentialManchester';

export const convertions = {
  'NRZ-L': nrz_l,
  'NRZ-I': nrz_i,
  'AMI': ami,
  'Pseudoternário': pseudoternary,
  'Manchester': manchester,
  'Manchester Diferencial': diferentialManchester,
};

export default function conversor(data) {
  console.log(Object.keys(convertions));
  if (!convertions[data.type] || data.data === '') {
    return {
      originalValue: data.data,
      originalPoints: [],
      convertedPoints: [],
      typeName: null,
    };
  }
  const convertedPoints = convertions[data.type](data.data);
  const newData = {
    originalValue: data.data,
    convertedPoints,
    typeName: data.type,
  };
  return newData;
}
