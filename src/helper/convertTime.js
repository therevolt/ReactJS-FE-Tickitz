export const cvTime = (value) => {
  const dataTime = value.split(":");
  let hours = dataTime[0];
  let minutes = dataTime[1];
  let formatTime = "";
  if (parseInt(dataTime[0]) < 12) {
    formatTime = "am";
  } else {
    formatTime = "pm";
    hours -= 12;
  }
  return `${hours.toString().length > 1 ? hours : `0${hours}`}:${
    minutes.toString().length > 1 ? minutes : `0${minutes}`
  } ${formatTime}`;
};
