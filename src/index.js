module.exports = function toReadable(number) {
  const units = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number < 20) {
    return units[number];
  }

  if (number < 100) {
    const tenPart = Math.floor(number / 10);
    const onePart = number % 10;
    return onePart === 0
      ? tens[tenPart]
      : `${tens[tenPart]} ${units[onePart]}`;
  }

  const hundredPart = Math.floor(number / 100);
  const rest = number % 100;

  if (rest === 0) {
    return `${units[hundredPart]} hundred`;
  }

  return `${units[hundredPart]} hundred ${toReadable(rest)}`;

};
