export default function conversor(data, types) {
  const arr = data.data.split('');
  const newArr = arr.map((sign, idx) => [
    { x: idx, y: Number(sign) },
    { x: idx + 1, y: Number(sign) },
  ]);
  const originalPoints = newArr.flat();
  const newData = {
    originalValue: data.data,
    originalPoints,
    convertedPoints: data.data,
    typeName: data.type,
  };
  return newData;
}
