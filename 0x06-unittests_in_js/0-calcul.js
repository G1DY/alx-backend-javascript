const calculateNumber = (a, b) => {
  const num = Math.round(a);
  const _num = Math.round(b);
  return num + _num;
}

module.exports = calculateNumber;