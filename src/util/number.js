export const parseNumber = (value) =>
  typeof value === 'number' ? value.toLocaleString('en-EN') : value;

export const countPercent = (value, total) => {
  if (!total) return 0;

  const percent = (value * 100) / total;
  return parseNumber(percent.toFixed(2));
};
