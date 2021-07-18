export default function conversor(data, types) {
  console.log(types);
  const newData = {
    originalValue: data.data,
    originalPoints: data.data,
    convertedPoints: data.data,
    typeName: data.type,
  };
  return newData;
}
