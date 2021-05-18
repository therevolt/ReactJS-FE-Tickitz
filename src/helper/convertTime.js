export const cvTime = (value) => {
  const date = new Date(value);
  let hour = date.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const format = hour < 12 ? "am" : "pm";
  return `${hour}:${minutes}${format}`;
};
