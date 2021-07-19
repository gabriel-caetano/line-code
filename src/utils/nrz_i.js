export default function nrz_i(input) {
  const chars = input.split('');
  let prev = 1;
  const nestedPoints = chars.map((char, index) => {
    const change = char === '1';
    let val = prev;
    if (change) {
      val = -prev;
    }
    prev = val;
    return [
      { x: index, y: val },
      { x: index + 1, y: val },
    ];
  });
  const output = nestedPoints.flat();
  return output;
}
