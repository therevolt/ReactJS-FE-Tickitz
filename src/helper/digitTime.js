export const DigitTime = (value) => {
  return value.toString().length < 2 ? `0${value}` : value;
};
