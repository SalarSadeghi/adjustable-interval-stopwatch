export const formatTimeMS = (number) => {
  const ms = number * 10;
  const mm = Math.floor(ms / (60 * 1000));
  const ss = Math.floor((ms % 60000) / 1000);
  const SS = Math.floor((ms % 1000) / 10);

  return `${String(mm).padStart(2, "0")}:${String(ss).padStart(
    2,
    "0"
  )}:${String(SS).padStart(2, "0")}`;
};

export const formatTime = (number) => {
  const hh = Math.floor(number / (60 * 60));
  const mm = Math.floor((number % 3600) / 60);
  const ss = Math.floor(number % 60);

  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(
    2,
    "0"
  )}:${String(ss).padStart(2, "0")}`;
};
