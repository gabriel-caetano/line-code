import nrz_l from './nrz_l';
import nrz_i from './nrz_i';
import ami from './ami';

const convert = {
  'NRZ-L': nrz_l,
  'NRZ-I': nrz_i,
  'AMI': ami,
};

export default function conversor(data, types) {
  const arr = data.data.split('');
  console.log(data.type);
  const convertedPoints = convert[data.type](data.data);
  const newArr = arr.map((sign, idx) => [
    { x: idx, y: Number(sign) },
    { x: idx + 1, y: Number(sign) },
  ]);
  const originalPoints = newArr.flat();
  const newData = {
    originalValue: data.data,
    originalPoints,
    convertedPoints,
    typeName: data.type,
  };
  return newData;
}
