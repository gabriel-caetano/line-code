export default function nrz_l(input) {
  const chars = input.split('');
  const nestedPoints = chars.map((char, index) => {
    const value = char === '1' ? 1 : -1;
    return [
      { x: index, y: value },
      { x: index + 1, y: value },
    ];
  });
  const output = nestedPoints.flat();
  return output;
}
