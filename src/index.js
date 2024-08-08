

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];

  return matrix.reduce((acc, cur, i) => {
    if (i % 2 === 0) {
      acc.push(...cur.sort((a, b) => a - b));
    } else {
      acc.push(...cur.sort((a, b) => b - a));
    }

    return acc;
  }, []);
}

















