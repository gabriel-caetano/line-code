export default function preudoternary(input) {
  const chars = input.split('');
  let beginning = -1;
  let end = 1;
  const nestedPoints = chars.map((char, index) => {
    if (char === '1') {
      beginning *= -1;
      end *= -1;
    }
    return [
      { x: index, y: beginning },
      { x: index + 0.5, y: beginning },
      { x: index + 0.5, y: end },
      { x: index + 1, y: end },
    ];
  });
  const output = nestedPoints.flat();
  return output;
}
