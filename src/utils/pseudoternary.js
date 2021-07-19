export default function preudoternary(input) {
  const chars = input.split('');
  let prevZero = -1;
  let val;
  const nestedPoints = chars.map((char, index) => {
    if (char === '0') {
      val = prevZero * -1;
      prevZero = val;
    } else {
      val = 0;
    }
    return [
      { x: index, y: val },
      { x: index + 1, y: val },
    ];
  });
  const output = nestedPoints.flat();
  return output;
}
